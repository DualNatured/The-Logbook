// =====================================
// 🔹 Title: SmartChat - AI Powered Chat Application (Local Version)
// =====================================

import java.util.*;

public class SmartChat {

    private static final Scanner sc = new Scanner(System.in);
    private static final Map<String, String> aiResponses = new HashMap<>();
    private static final List<String> chatHistory = new ArrayList<>();

    public static void main(String[] args) {
        initResponses();

        System.out.println("🤖 Welcome to SmartChat — Your AI Friend!");
        System.out.println("Type 'history' to see chat history, or 'exit' to quit.\n");

        while (true) {
            System.out.print("You: ");
            String input = sc.nextLine().trim();

            if (input.equalsIgnoreCase("exit")) {
                System.out.println("🤖 SmartChat: Goodbye, have a great day!");
                break;
            }

            if (input.equalsIgnoreCase("history")) {
                showHistory();
                continue;
            }

            String reply = getAIResponse(inp
