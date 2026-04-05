import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ChatMessage {
    message: string;
    timestamp: Time;
}
export interface Inquiry {
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllChatMessages(): Promise<Array<[Principal, ChatMessage]>>;
    getInquiriesByEmail(): Promise<Array<Inquiry>>;
    getRecentInquiries(): Promise<Array<Inquiry>>;
    submitChatMessage(message: string): Promise<void>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
