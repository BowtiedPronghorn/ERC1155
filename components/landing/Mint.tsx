import { NextPage } from "next";
import styles from "@styles/Mint.module.css";
import { Button, HStack, Link, VStack } from "@chakra-ui/react";
import { useAccount, useContractWrite, useNetwork } from "wagmi";
import myNFT from "@data/MyNFT.json";
import { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
} from "@chakra-ui/react";
import web3 from "web3";
import { abridgeAddress } from "@utils/abridgeAddress";
import ConnectWallet from "@components/web3/ConnectWallet";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const BLOCK_EXPLORER = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL;
const CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID);

const PRICE = 0.02; // change to match the price on your contract

const Mint: NextPage = () => {
  const { data: account } = useAccount();
  const { activeChain, switchNetwork } = useNetwork();

  const [payable, setPayable] = useState(BigInt(60000000000000000).toString());
  const [numPublicMint, setNumPublicMint] = useState(3);
  const [hasMinted, setHasMinted] = useState(false);

  const handleChange = (value: number | string) => {
    setNumPublicMint(Number(value));
    const payableInEth = PRICE * Number(value);
    const payableinWei = web3.utils.toWei(payableInEth.toString(10), "ether");
    setPayable(payableinWei);
  };

  const {
    data: publicSaleData,
    error: publicSaleError,
    isError: publicSaleIsError,
    isLoading: publicSaleIsLoading,
    write: publicSaleWrite,
  } = useContractWrite(
    {
      addressOrName: CONTRACT_ADDRESS
        ? CONTRACT_ADDRESS
        : "0x90d197fc1417bC58A2193E0B124771Eec5CC18ca",
      contractInterface: myNFT.abi,
    },
    "mint",
    {
      onError(error) {
        console.log(error);
      },
      onSuccess(data) {
        console.log(data);
        setHasMinted(true);
      },
    }
  );

  const handlePublicMint = async () => {
    try {
      await publicSaleWrite();
    } catch (err) {
      console.log(`Error minting ${err}`);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Mint your first Jungle Cards</h1>
          {hasMinted && publicSaleData ? (
            <VStack>
              <p style={{ color: "white" }}>
                Your transaction was sent! Click here to view your transaction:
              </p>
              <Link
                href={`${BLOCK_EXPLORER || "https://goerli.etherscan.io"}/tx/${
                  publicSaleData.hash
                }`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  borderRadius: "0",
                }}
              >
                Etherscan: {abridgeAddress(publicSaleData.hash)}
              </Link>
              <Link href="/mypage">
                <Button
                  style={{
                    color: "#4b4f56",
                    borderRadius: "0",
                  }}
                >
                  View My Collection
                </Button>
              </Link>
            </VStack>
          ) : !account?.address ? (
            <VStack>
              <ConnectWallet />
            </VStack>
          ) : activeChain?.id !== CHAIN_ID ? (
            <VStack>
              <p style={{ color: "white" }}>You're on the wrong Network!</p>
              <Button
                style={{
                  color: "#4b4f56",
                  borderRadius: "0",
                }}
                onClick={() => {
                  switchNetwork && switchNetwork(CHAIN_ID);
                }}
              >
                Switch Network
              </Button>
            </VStack>
          ) : (
            <VStack>
              {/* select # of tokens to mint */}
              <HStack>
                <Button
                  style={{
                    color: "#4b4f56",
                    borderRadius: "0",
                  }}
                  onClick={handlePublicMint}
                >
                  Mint NFT
                  {publicSaleIsLoading && <Spinner marginLeft={2} />}
                </Button>
              </HStack>

              {publicSaleIsError && (
                <p style={{ color: "red" }}>
                  Error:{" "}
                  {publicSaleError?.message.includes("Max tokens to mint") &&
                    "Minted max tokens"}
                  {/* this happens sometimes when there is a race condition on the payable state */}
                  {publicSaleError?.message.includes("Incorrect ETH") &&
                    "Please try again."}
                  {publicSaleError?.message.includes("not open") &&
                    "Public sale is currently closed"}
                  {publicSaleError?.message.includes("insufficient funds") &&
                    "Insufficient funds"}
                  {publicSaleError?.message.includes(
                    "Insufficient tokens remaining"
                  ) && "The collection has fully minted"}
                  {publicSaleError?.message.includes("User rejected request") &&
                    "User rejected request"}
                </p>
              )}
            </VStack>
          )}
        </main>
      </div>
    </div>
  );
};

export default Mint;
