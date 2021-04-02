import { MessageService } from "./message.service";

describe("Message Service", () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it("Should have no message to start", () => {
    expect(service.messages.length).toBe(0);
  });

  it("Should add a message when add is called", () => {
    service.add("meesageHERE");

    expect(service.messages.length).toBe(1);
  });

  it("Should add this message", () => {
    service.add("message1");

    expect(service.messages).toContain("message1");
  });

  it("Should clear the messages from the array", () => {
    service.add("this message");

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
