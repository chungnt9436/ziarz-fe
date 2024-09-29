const Helpers = {
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    },
    isMobile  () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|FBAN|FBAV/i.test(navigator.userAgent));
    },

    setCookie  (name, value, days)  {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    getCookie  (name)  {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    eraseCookie  (name)  {
        document.cookie = name + "=; Max-Age=-99999999;";
    },

    formatTimeDifference (value) {
        const sessionTime = new Date(value);
        const currentTime = new Date();

        const differenceInMs = currentTime - sessionTime;

        const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));

        let timeDifferenceText = '';
        if (days > 0) {
            timeDifferenceText = `${days} ngày trước`;
        } else if (hours > 0) {
            timeDifferenceText = `${hours} giờ trước`;
        } else {
            timeDifferenceText = `${minutes} phút trước`;
        }

        return timeDifferenceText;
    }

};

export default Helpers
