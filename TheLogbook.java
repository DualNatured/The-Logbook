// =====================================
// 🔹 Title: The Logbook - Simple Blogging Platform
// =====================================

import java.util.*;

class Post {
    int id;
    String title;
    String content;
    Date date;

    Post(int id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = new Date();
    }

    void display() {
        System.out.println("\n📰 [" + id + "] " + title);
        System.out.println("   Posted on: " + date);
        System.out.println("   " + content);
    }
}
