import Principal "mo:core/Principal";
import Time "mo:core/Time";
import List "mo:core/List";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type ChatMessage = {
    message : Text;
    timestamp : Time.Time;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry2.submittedAt, inquiry1.submittedAt);
    };

    public func compareByEmail(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.email, inquiry2.email);
    };
  };

  let chatMessages = List.empty<(Principal, ChatMessage)>();
  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitChatMessage(message : Text) : async () {
    let chat : ChatMessage = {
      message;
      timestamp = Time.now();
    };
    chatMessages.add((caller, chat));
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      message;
      submittedAt = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllChatMessages() : async [(Principal, ChatMessage)] {
    chatMessages.toArray();
  };

  public query ({ caller }) func getRecentInquiries() : async [Inquiry] {
    inquiries.toArray().sort();
  };

  public query ({ caller }) func getInquiriesByEmail() : async [Inquiry] {
    inquiries.toArray().sort(Inquiry.compareByEmail);
  };
};
