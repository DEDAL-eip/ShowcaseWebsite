const load = async ({ fetch }) => {
  const res = await fetch("/api/apkVersions");
  const data = await res.json();
  var versions = [];
  data.data.map((version) => {
    versions.push(version.slice(19, -4));
  });
  versions.sort().reverse();
  return {
    versions
  };
};
export {
  load
};
