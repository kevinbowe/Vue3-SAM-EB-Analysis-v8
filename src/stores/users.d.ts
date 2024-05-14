export declare const useUserPiniaStore: import("pinia").StoreDefinition<"userPiniaStore", {
    connected: boolean;
    username: string;
    preferred_username: string;
    email: string;
    phone_number: string;
    nickname: string;
    sub: string;
}, {}, {
    deleteAllDevStores(): void;
    clearAllStores(): void;
}>;
