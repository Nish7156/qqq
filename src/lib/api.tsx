export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_BASE_URL|| "http://139.84.137.62:1337"
  }${path}`;
}
interface OptinType{
  author:string,
  categories:string,
  tags:string,
}
export async function fetchAPI(path: any, urlParamsObject: any, options:OptinType) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };
  //   const queryString = qs.stringify(urlParamsObject);
  const queryString = urlParamsObject.slug;
  // console.log(queryString, "queryString");

  const requestUrl = `${getStrapiURL(
    `/api/${path}${queryString ? `=${queryString}` : ""}&&populate=${options.author}.image&populate=coverImg.image&populate=${options.categories}&populate=${options.tags}`
  )}`;
  // console.log(requestUrl);
  try {
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error, "rror in API.TSX");
    throw new Error("404");
  }
}
