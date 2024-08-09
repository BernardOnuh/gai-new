import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/ExploreNft";
import NftCardDetails from "./pages/NftCardDetails";
import NftCardConnected from "./pages/NftCardConnected";
import AdminHome from "./pages/Admin/AdminHome";
import AdminFee from "./pages/Admin/AdminFee";
import AdminReward from "./pages/Admin/AdminReward";
import AdminContract from "./pages/Admin/AdminContract";
import AdminOther from "./pages/Admin/AdminOther";
import AdminBoost from "./pages/Admin/AdminBoost";
import AdminPlatform from "./pages/Admin/AdminPlatform";
import RafflePage from "./pages/RafflePage";
import RaffleItemPage from "./pages/RaffleItemPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Navbar/Footer";
import TraitHome from "./pages/Trait/TraitHome";
import { useEffect, useState } from "react";
import { fetchNfts } from "./api/fetchNFT";

function App() {
  const [extractedData, setExtractedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNfts(
        "0x5b92247bbF1D73Fb727C488dA9fD2e41DF11d4a3"
      );
      console.log(extractedData);
      if (result) {
        setExtractedData(result.extractedData);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nfts" element={<Explore />} />
        <Route
          exact
          path="/nfts/card/:name/:stakingAddress/:chain"
          element={<NftCardDetails extractedData={extractedData} />}
        />
        <Route
          exact
          path="/nfts/card/:name/:id/connected/:id"
          element={<NftCardConnected />}
        />
        <Route exact path="/admin" element={<AdminHome />} />
        <Route exact path="/admin/fee" element={<AdminFee />} />
        <Route exact path="/admin/reward" element={<AdminReward />} />
        <Route exact path="/admin/contract" element={<AdminContract />} />
        <Route exact path="/admin/other" element={<AdminOther />} />
        <Route exact path="/admin/boost-nft" element={<AdminBoost />} />
        <Route exact path="/admin/platform-admin" element={<AdminPlatform />} />
        <Route exact path="/raffle" element={<RafflePage />} />
        <Route exact path="/TraitDashboard" element={<TraitHome />} />
        <Route exact path="/TraitStaking" element={<RafflePage />} />

        <Route exact path="/raffle/:id" element={<RaffleItemPage />} />

        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
