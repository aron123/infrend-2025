# Görgetés az üzenetek aljára

```ts
scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('.message-box')!.scrollHeight), 200);
}
```
