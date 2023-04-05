import axios from "axios";
import address from "./address.json" assert { type: "json" };

const baseAddress = (id) => {
  return `https://member.lazada.com.ph/locationtree/api/getSubAddressList?countryCode=PH&addressId=${id}&page=addressEdit`;
};
const data = address.module.slice(0);

data.map((province) => {
  const url = baseAddress(province.id);

  const fetcher = async (url) => {
    const response = await axios.get(url);
    if (response?.data?.module !== null) {
      await fetcher(baseAddress(response?.data?.module?.id));
    }
  };

  fetcher(url);
});

//
// const jsonExtractor = async () => {
//   const province = await axios.get(
//     "https://member.lazada.com.ph/locationtree/api/getSubAddressList?countryCode=PH&page=addressEdit"
//   );

//     const { module } = province.data;

//     const newData = module.map((item) => ({
//         id: item.id,
//         name: item.name,
//         scope: item.scope,
//     }));
// };

//jsonExtractor();

// const fetchData = async(url, scope) => {
//     if(scope >=4)
// }
