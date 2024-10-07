
let flag = true;
const throttleMethod = (setThrottleCount: React.Dispatch<React.SetStateAction<number>>) => {
    if (flag) {
        setThrottleCount((prev: number) => prev + 1);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, 1000);
    }
}
export default throttleMethod

