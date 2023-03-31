import { ChainId, CHAIN_ID } from "utils/chains";
import { COMPOUND_ADDRESS, STAKE_AAVE_ADDRESS, ZERO_ADDRESS } from "utils/addresses";

export interface CollateralPlugin {
    symbol: string; // collateral symbol
    address: string; // collateral plugin address
    decimals: number; // 6-18
    targetUnit: string; // USD / EUR / etc
    referenceUnit: string; // Underlay ERC20 (USDC)
    collateralToken: string; // Wrapper token (usually yield token)
    collateralAddress: string;
    description: string; // Small description
    rewardToken: string; // yield token aave / compound wrapped Asset
    custom?: boolean;
}

export const TARGET_UNITS = {
    USD: "USD",
    EUR: "EUR",
    ETH: "ETH",
    BTC: "BTC",
};

const collateralPlugins: { [chainId: number]: CollateralPlugin[] } = {
    [ChainId.Mainnet]: [
        // FIAT COLLATERAL
        {
            symbol: "DAI",
            address: "0xe5E6bBE251c22C9E100a3A10e88C5Abdfd24f6d8",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "DAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDC",
            address: "0xb241baed74a8b2199D4d516F20Ec529FBb32F3c7",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "USDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDT",
            address: "0xd73F2858A7Bf1d5Bc7523670c14F5EF4b7E37A54",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "USDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDP",
            address: "0x45C515e8E7cB1543364303cfB1dDBA9B0Ad13de9",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDP",
            collateralToken: "USDP",
            description: "",
            collateralAddress: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "TUSD",
            address: "0x0023b264bDD45Dd95B12198A659109Edc3C8b9Bd",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "TUSD",
            collateralToken: "TUSD",
            description: "",
            collateralAddress: "0x0000000000085d4780B73119b644AE5ecd22b376",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "BUSD",
            address: "0x22594aD1C779732E6D015712478445A68cC39fe4",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "BUSD",
            description: "",
            collateralAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            rewardToken: ZERO_ADDRESS,
        },
        // YIELD TOKEN COLLATERAL
        {
            symbol: "aDAI",
            address: "0x533BFe91fd2Db80A331e4FD815b19D052cbBA0Bf",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "aDAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aUSDC",
            address: "0xD995836dA78F416C4bD60Edd7EC1282Ec08a7e0C",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "aUSDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aUSDT",
            address: "0x75fAC74B93F9e919493cfb77099572AacAa67BD7",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aBUSD",
            address: "0x5f933959a92170B46AF82053d1Af289709f6A6f1",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "aBUSD",
            description: "",
            collateralAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cDAI",
            address: "0x52160CA2651CBEFCc6b603828290A67f80C14764",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "cDAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cUSDC",
            address: "0xA5CBDe1A0FeB3112bBbe421226a24EF806A44a30",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "cUSDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cUSDT",
            address: "0x94494d7C044Eb8847701C6e96B15d8FF78667623",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cWBTC",
            address: "0x6C44A7270FCEd64Ca0A9A8c4DB998A8b218e9301",
            decimals: 18,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "WBTC",
            collateralToken: "cWBTC",
            description: "",
            collateralAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cETH",
            address: "0x1A406077d4BA972e2d879aA62D00BF553CdF6621",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "ETH",
            collateralToken: "cETH",
            description: "",
            collateralAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "wBTC",
            address: "0xC301E3299b2014f9Db052582978e7282f2c3119a",
            decimals: 6,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "wBTC",
            collateralToken: "wBTC",
            description: "",
            collateralAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "wETH",
            address: "0x7d61D0d965Db9ED75eb170742259c6F40AF31605",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "wETH",
            collateralToken: "wETH",
            description: "",
            collateralAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "EURT",
            address: "0x650C62eC7aC3DB6d08fd922Cc859183Cd79903E7",
            decimals: 6,
            targetUnit: TARGET_UNITS.EUR,
            referenceUnit: "EURT",
            collateralToken: "EURT",
            description: "",
            collateralAddress: "0xC581b735A1688071A1746c968e0798D642EDE491",
            rewardToken: ZERO_ADDRESS,
        },
    ],
    [ChainId.Goerli]: [
        // FIAT COLLATERAL
        {
            symbol: "DAI",
            address: "0xF7F5cC0416C555bAbF9A53bf9cb59bd5E87F04B1",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "DAI",
            description: "",
            collateralAddress: "0xB2b615835F802E4eEa239D1F5Ec5fC85DEF14f9A",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDC",
            address: "0xeFe433CE0a99872e2753b12C27c1cd87FB9Da5e3",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "USDC",
            description: "",
            collateralAddress: "0xE0914207d775FA217A07DFfDA71f9ab0427D9462",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDT",
            address: "0x7a1BDB770C2a10F68cC33E591B9c7F2131014D27",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "USDT",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDP",
            address: "0x2B02cD2BFA6E6a15f71d8A53332065865c68dE8e",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDP",
            collateralToken: "USDP",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "TUSD",
            address: "0x5bfFB6efcF7C571a864503F4c3fd777b6b01DAc9",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "TUSD",
            collateralToken: "TUSD",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "BUSD",
            address: "0x8753D10082Dc83CA490b4735aC0463C8251EDc86",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "BUSD",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: ZERO_ADDRESS,
        },
        // YIELD TOKEN COLLATERAL
        {
            symbol: "aDAI",
            address: "0xb06903A5e0261F85abEBf5AF4083a5572A954C19",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "aDAI",
            description: "",
            collateralAddress: "0xA348a2FDB75c8620558b329462c30DBA753A8A79",
            rewardToken: STAKE_AAVE_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "aUSDC",
            address: "0x4FB59A2c3470c9D819FC2A72408e1fb1636D1dFb",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "aUSDC",
            description: "",
            collateralAddress: "0xE0914207d775FA217A07DFfDA71f9ab0427D9462",
            rewardToken: STAKE_AAVE_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "aUSDT",
            address: "0x36Cc6F0b52Cf11582eb294D6d72b4AfE6CBCDFcD",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: STAKE_AAVE_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "aBUSD",
            address: "0x6231c0d0C86C3541E152d2E4b3C1Ac1839448a2C",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "aBUSD",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: STAKE_AAVE_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "cDAI",
            address: "0xC0114A8576FA3c0E42aEa0838a20db24F1d0449d",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "cDAI",
            description: "",
            collateralAddress: "0xdc09753894a3F80B8D7EF1D6696ECc7fA3244C21",
            rewardToken: COMPOUND_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "cUSDC",
            address: "0x5553FBbaB2E0025Cf64C01025AB0082Fe48fB5af",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "cUSDC",
            description: "",
            collateralAddress: "0xE0914207d775FA217A07DFfDA71f9ab0427D9462",
            rewardToken: COMPOUND_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "cUSDT",
            address: "0xa9e5298d3C5b621fE8195BA0E3Fbf46170DacaCc",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0x921469B843D10F8C55175a6a2Bc45EAe225E3fB2",
            rewardToken: COMPOUND_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "cWBTC",
            address: "0x410c567660edAa758339FA273Bb4182D12bf604a",
            decimals: 18,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "WBTC",
            collateralToken: "cWBTC",
            description: "",
            collateralAddress: "0xa2fC3a92fDf545B4BC6a7bEE038Ab0e8e05a70a1",
            rewardToken: COMPOUND_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "cETH",
            address: "0xbcE2795FFC0C2BA8B5bd41521676EDD8Fd161160",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "ETH",
            collateralToken: "cETH",
            description: "",
            collateralAddress: "0x25d6C3deAe1Fc0530516Bce5459F458f0d7d7086",
            rewardToken: COMPOUND_ADDRESS[CHAIN_ID],
        },
        {
            symbol: "wBTC",
            address: "0x02FFfDCbb160fb9C6DE3fE3b8EEca5aEEe28Af0d",
            decimals: 6,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "wBTC",
            collateralToken: "wBTC",
            description: "",
            collateralAddress: "0xaFb62B600377010EC224B5b61973f67d2bACE909",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "wETH",
            address: "0x3E276718F7A82715a1Df28Bde41342ae6005EBD7",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "wETH",
            collateralToken: "wETH",
            description: "",
            collateralAddress: "0xaFb62B600377010EC224B5b61973f67d2bACE909",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "EURT",
            address: "0xED592434CbDc35B47C4CDa82C7a02ECcf5Df8cA2",
            decimals: 6,
            targetUnit: TARGET_UNITS.EUR,
            referenceUnit: "EURT",
            collateralToken: "EURT",
            description: "",
            collateralAddress: "0x9fF645a81dF82C6eF09B596bE1736bFbc6B7dA90",
            rewardToken: ZERO_ADDRESS,
        },
    ],
    [ChainId.Hardhat]: [
        // FIAT COLLATERAL
        {
            symbol: "DAI",
            address: "0xe5E6bBE251c22C9E100a3A10e88C5Abdfd24f6d8",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "DAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDC",
            address: "0xb241baed74a8b2199D4d516F20Ec529FBb32F3c7",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "USDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDT",
            address: "0xd73F2858A7Bf1d5Bc7523670c14F5EF4b7E37A54",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "USDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "USDP",
            address: "0x45C515e8E7cB1543364303cfB1dDBA9B0Ad13de9",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDP",
            collateralToken: "USDP",
            description: "",
            collateralAddress: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "TUSD",
            address: "0x0023b264bDD45Dd95B12198A659109Edc3C8b9Bd",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "TUSD",
            collateralToken: "TUSD",
            description: "",
            collateralAddress: "0x0000000000085d4780B73119b644AE5ecd22b376",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "BUSD",
            address: "0x22594aD1C779732E6D015712478445A68cC39fe4",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "BUSD",
            description: "",
            collateralAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            rewardToken: ZERO_ADDRESS,
        },
        // YIELD TOKEN COLLATERAL
        {
            symbol: "aDAI",
            address: "0x533BFe91fd2Db80A331e4FD815b19D052cbBA0Bf",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "aDAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aUSDC",
            address: "0xD995836dA78F416C4bD60Edd7EC1282Ec08a7e0C",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "aUSDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aUSDT",
            address: "0x75fAC74B93F9e919493cfb77099572AacAa67BD7",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "aBUSD",
            address: "0x5f933959a92170B46AF82053d1Af289709f6A6f1",
            decimals: 18,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "BUSD",
            collateralToken: "aBUSD",
            description: "",
            collateralAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            rewardToken: STAKE_AAVE_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cDAI",
            address: "0x52160CA2651CBEFCc6b603828290A67f80C14764",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "DAI",
            collateralToken: "cDAI",
            description: "",
            collateralAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cUSDC",
            address: "0xA5CBDe1A0FeB3112bBbe421226a24EF806A44a30",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDC",
            collateralToken: "cUSDC",
            description: "",
            collateralAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cUSDT",
            address: "0x94494d7C044Eb8847701C6e96B15d8FF78667623",
            decimals: 6,
            targetUnit: TARGET_UNITS.USD,
            referenceUnit: "USDT",
            collateralToken: "aUSDT",
            description: "",
            collateralAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cWBTC",
            address: "0x6C44A7270FCEd64Ca0A9A8c4DB998A8b218e9301",
            decimals: 18,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "WBTC",
            collateralToken: "cWBTC",
            description: "",
            collateralAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "cETH",
            address: "0x1A406077d4BA972e2d879aA62D00BF553CdF6621",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "ETH",
            collateralToken: "cETH",
            description: "",
            collateralAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            rewardToken: COMPOUND_ADDRESS[ChainId.Mainnet],
        },
        {
            symbol: "wBTC",
            address: "0xC301E3299b2014f9Db052582978e7282f2c3119a",
            decimals: 6,
            targetUnit: TARGET_UNITS.BTC,
            referenceUnit: "wBTC",
            collateralToken: "wBTC",
            description: "",
            collateralAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "wETH",
            address: "0x7d61D0d965Db9ED75eb170742259c6F40AF31605",
            decimals: 18,
            targetUnit: TARGET_UNITS.ETH,
            referenceUnit: "wETH",
            collateralToken: "wETH",
            description: "",
            collateralAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            rewardToken: ZERO_ADDRESS,
        },
        {
            symbol: "EURT",
            address: "0x650C62eC7aC3DB6d08fd922Cc859183Cd79903E7",
            decimals: 6,
            targetUnit: TARGET_UNITS.EUR,
            referenceUnit: "EURT",
            collateralToken: "EURT",
            description: "",
            collateralAddress: "0xC581b735A1688071A1746c968e0798D642EDE491",
            rewardToken: ZERO_ADDRESS,
        },
    ],
};

export default collateralPlugins[CHAIN_ID] || [];
