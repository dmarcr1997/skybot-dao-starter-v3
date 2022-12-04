import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { ethers } from "ethers";

(async () => {
   try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "SkyBotDAO Membership",
      description: "A DAO for anyone wanting to control a drone.",
      image: readFileSync("scripts/assets/DroneImgNFT.png"),
      primary_sale_recipient: AddressZero,
    },{ gasLimit: 250000 });

    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();