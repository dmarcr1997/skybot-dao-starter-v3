import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x8319c54f9B1839b1f52A0deF16Af5409A04F8009", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "City Drones",
        description: "This NFT will give you access to SkyBot DAO!",
        image: readFileSync("scripts/assets/DroneImgNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();