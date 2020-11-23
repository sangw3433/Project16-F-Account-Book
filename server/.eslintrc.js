module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  rules: {
    "import/no-unresolved": "off",
    // ts, tsx, json 파일은 확장자 없이 import 가능
    "no-console": "off",
    // 콘솔 허용이 필요할 때는 위의 코드에 주석을 달아서 지워주세요!
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        json: "never",
      },
    ],
  },
  extends: [
    "airbnb-base",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
};
