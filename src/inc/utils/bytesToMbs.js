export const bytesToMbs = (sizeInBytes, decimals = 2) => {
  if (!+sizeInBytes) return "0 Bytes";

  const k = 1024;
  // const dm = decimals < 0 ? 0 : decimals; // if want in decimal format
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(sizeInBytes) / Math.log(k));

  // return `${parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(dm))} ${
  //   sizes[i]
  // }`; // if want in decimal format
  return `${parseFloat(sizeInBytes / Math.pow(k, i)).toFixed(0)} ${sizes[i]}`; // if want in plain format
};
