const privacyButton = document.querySelector("#privacy-policy-submit-button");
const localeStorageButton = document.querySelector(
  "#locale-storage-submit-button"
);

privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

localeStorageButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});
