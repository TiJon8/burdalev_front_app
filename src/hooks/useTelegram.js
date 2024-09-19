const tg = window.Telegram.WebApp;

tg.MainButton.setText("Подписаться")

tg.MainButton.onClick(() => {
    tg.close();
})

export function useTelegram() {
    const onClose = () => {
        tg.close();
      }

    const onToggleButton = (member) => {
        if(member === "guest" && !tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton, 
        tg,
        user: tg.initDataUnsafe?.user, 
    }
 }