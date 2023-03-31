/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PayableOverrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BasketHandlerInterface extends utils.Interface {
    functions: {
        "basketsHeldBy(address)": FunctionFragment;
        "disableBasket()": FunctionFragment;
        "fullyCapitalized()": FunctionFragment;
        "init(address)": FunctionFragment;
        "lastSet()": FunctionFragment;
        "main()": FunctionFragment;
        "price()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "quantity(address)": FunctionFragment;
        "quote(uint192,uint8)": FunctionFragment;
        "refreshBasket()": FunctionFragment;
        "setBackupConfig(bytes32,uint256,address[])": FunctionFragment;
        "setPrimeBasket(address[],uint192[])": FunctionFragment;
        "status()": FunctionFragment;
        "switchBasket()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "basketsHeldBy"
            | "disableBasket"
            | "fullyCapitalized"
            | "init"
            | "lastSet"
            | "main"
            | "price"
            | "proxiableUUID"
            | "quantity"
            | "quote"
            | "refreshBasket"
            | "setBackupConfig"
            | "setPrimeBasket"
            | "status"
            | "switchBasket"
            | "upgradeTo"
            | "upgradeToAndCall"
    ): FunctionFragment;

    encodeFunctionData(functionFragment: "basketsHeldBy", values: [string]): string;
    encodeFunctionData(functionFragment: "disableBasket", values?: undefined): string;
    encodeFunctionData(functionFragment: "fullyCapitalized", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [string]): string;
    encodeFunctionData(functionFragment: "lastSet", values?: undefined): string;
    encodeFunctionData(functionFragment: "main", values?: undefined): string;
    encodeFunctionData(functionFragment: "price", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "quantity", values: [string]): string;
    encodeFunctionData(functionFragment: "quote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "refreshBasket", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "setBackupConfig",
        values: [BytesLike, BigNumberish, string[]]
    ): string;
    encodeFunctionData(
        functionFragment: "setPrimeBasket",
        values: [string[], BigNumberish[]]
    ): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "switchBasket", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;

    decodeFunctionResult(functionFragment: "basketsHeldBy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableBasket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullyCapitalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastSet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "main", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quantity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refreshBasket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBackupConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimeBasket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "switchBasket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;

    events: {
        "AdminChanged(address,address)": EventFragment;
        "BackupConfigSet(bytes32,uint256,address[])": EventFragment;
        "BasketSet(address[],uint192[],bool)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "PrimeBasketSet(address[],uint192[],bytes32[])": EventFragment;
        "Upgraded(address)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BackupConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BasketSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimeBasketSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BackupConfigSetEventObject {
    targetName: string;
    max: BigNumber;
    erc20s: string[];
}
export type BackupConfigSetEvent = TypedEvent<
    [string, BigNumber, string[]],
    BackupConfigSetEventObject
>;

export type BackupConfigSetEventFilter = TypedEventFilter<BackupConfigSetEvent>;

export interface BasketSetEventObject {
    erc20s: string[];
    refAmts: BigNumber[];
    disabled: boolean;
}
export type BasketSetEvent = TypedEvent<[string[], BigNumber[], boolean], BasketSetEventObject>;

export type BasketSetEventFilter = TypedEventFilter<BasketSetEvent>;

export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PrimeBasketSetEventObject {
    erc20s: string[];
    targetAmts: BigNumber[];
    targetNames: string[];
}
export type PrimeBasketSetEvent = TypedEvent<
    [string[], BigNumber[], string[]],
    PrimeBasketSetEventObject
>;

export type PrimeBasketSetEventFilter = TypedEventFilter<PrimeBasketSetEvent>;

export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface BasketHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: BasketHandlerInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        basketsHeldBy(
            account: string,
            overrides?: CallOverrides
        ): Promise<[BigNumber] & { baskets: BigNumber }>;

        disableBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        fullyCapitalized(overrides?: CallOverrides): Promise<[boolean]>;

        init(
            main_: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        lastSet(
            overrides?: CallOverrides
        ): Promise<[BigNumber, BigNumber] & { nonce: BigNumber; timestamp: BigNumber }>;

        main(overrides?: CallOverrides): Promise<[string]>;

        price(overrides?: CallOverrides): Promise<[BigNumber] & { p: BigNumber }>;

        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

        quantity(erc20: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        quote(
            amount: BigNumberish,
            rounding: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string[], BigNumber[]] & { erc20s: string[]; quantities: BigNumber[] }>;

        refreshBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        setBackupConfig(
            targetName: BytesLike,
            max: BigNumberish,
            erc20s: string[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        setPrimeBasket(
            erc20s: string[],
            targetAmts: BigNumberish[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        status(overrides?: CallOverrides): Promise<[number] & { status_: number }>;

        switchBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        upgradeTo(
            newImplementation: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        upgradeToAndCall(
            newImplementation: string,
            data: BytesLike,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;
    };

    basketsHeldBy(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    disableBasket(
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fullyCapitalized(overrides?: CallOverrides): Promise<boolean>;

    init(
        main_: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastSet(
        overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { nonce: BigNumber; timestamp: BigNumber }>;

    main(overrides?: CallOverrides): Promise<string>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    quantity(erc20: string, overrides?: CallOverrides): Promise<BigNumber>;

    quote(
        amount: BigNumberish,
        rounding: BigNumberish,
        overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]] & { erc20s: string[]; quantities: BigNumber[] }>;

    refreshBasket(
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBackupConfig(
        targetName: BytesLike,
        max: BigNumberish,
        erc20s: string[],
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPrimeBasket(
        erc20s: string[],
        targetAmts: BigNumberish[],
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    status(overrides?: CallOverrides): Promise<number>;

    switchBasket(
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
        newImplementation: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
        newImplementation: string,
        data: BytesLike,
        overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callStatic: {
        basketsHeldBy(account: string, overrides?: CallOverrides): Promise<BigNumber>;

        disableBasket(overrides?: CallOverrides): Promise<void>;

        fullyCapitalized(overrides?: CallOverrides): Promise<boolean>;

        init(main_: string, overrides?: CallOverrides): Promise<void>;

        lastSet(
            overrides?: CallOverrides
        ): Promise<[BigNumber, BigNumber] & { nonce: BigNumber; timestamp: BigNumber }>;

        main(overrides?: CallOverrides): Promise<string>;

        price(overrides?: CallOverrides): Promise<BigNumber>;

        proxiableUUID(overrides?: CallOverrides): Promise<string>;

        quantity(erc20: string, overrides?: CallOverrides): Promise<BigNumber>;

        quote(
            amount: BigNumberish,
            rounding: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string[], BigNumber[]] & { erc20s: string[]; quantities: BigNumber[] }>;

        refreshBasket(overrides?: CallOverrides): Promise<void>;

        setBackupConfig(
            targetName: BytesLike,
            max: BigNumberish,
            erc20s: string[],
            overrides?: CallOverrides
        ): Promise<void>;

        setPrimeBasket(
            erc20s: string[],
            targetAmts: BigNumberish[],
            overrides?: CallOverrides
        ): Promise<void>;

        status(overrides?: CallOverrides): Promise<number>;

        switchBasket(overrides?: CallOverrides): Promise<void>;

        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

        upgradeToAndCall(
            newImplementation: string,
            data: BytesLike,
            overrides?: CallOverrides
        ): Promise<void>;
    };

    filters: {
        "AdminChanged(address,address)"(
            previousAdmin?: null,
            newAdmin?: null
        ): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

        "BackupConfigSet(bytes32,uint256,address[])"(
            targetName?: BytesLike | null,
            max?: BigNumberish | null,
            erc20s?: null
        ): BackupConfigSetEventFilter;
        BackupConfigSet(
            targetName?: BytesLike | null,
            max?: BigNumberish | null,
            erc20s?: null
        ): BackupConfigSetEventFilter;

        "BasketSet(address[],uint192[],bool)"(
            erc20s?: null,
            refAmts?: null,
            disabled?: null
        ): BasketSetEventFilter;
        BasketSet(erc20s?: null, refAmts?: null, disabled?: null): BasketSetEventFilter;

        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;

        "PrimeBasketSet(address[],uint192[],bytes32[])"(
            erc20s?: null,
            targetAmts?: null,
            targetNames?: null
        ): PrimeBasketSetEventFilter;
        PrimeBasketSet(
            erc20s?: null,
            targetAmts?: null,
            targetNames?: null
        ): PrimeBasketSetEventFilter;

        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };

    estimateGas: {
        basketsHeldBy(account: string, overrides?: CallOverrides): Promise<BigNumber>;

        disableBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        fullyCapitalized(overrides?: CallOverrides): Promise<BigNumber>;

        init(
            main_: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        lastSet(overrides?: CallOverrides): Promise<BigNumber>;

        main(overrides?: CallOverrides): Promise<BigNumber>;

        price(overrides?: CallOverrides): Promise<BigNumber>;

        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

        quantity(erc20: string, overrides?: CallOverrides): Promise<BigNumber>;

        quote(
            amount: BigNumberish,
            rounding: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        refreshBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        setBackupConfig(
            targetName: BytesLike,
            max: BigNumberish,
            erc20s: string[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        setPrimeBasket(
            erc20s: string[],
            targetAmts: BigNumberish[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        status(overrides?: CallOverrides): Promise<BigNumber>;

        switchBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        upgradeTo(
            newImplementation: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        upgradeToAndCall(
            newImplementation: string,
            data: BytesLike,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        basketsHeldBy(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        disableBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        fullyCapitalized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        init(
            main_: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        lastSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        main(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        quantity(erc20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        quote(
            amount: BigNumberish,
            rounding: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        refreshBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        setBackupConfig(
            targetName: BytesLike,
            max: BigNumberish,
            erc20s: string[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        setPrimeBasket(
            erc20s: string[],
            targetAmts: BigNumberish[],
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        switchBasket(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        upgradeTo(
            newImplementation: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        upgradeToAndCall(
            newImplementation: string,
            data: BytesLike,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;
    };
}
