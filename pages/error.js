import { useRouter } from "next/navigation";
import Styles from "@/styles/Dashboard.module.scss";

const Error = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className={Styles.error}>
      <div className={Styles.errorText}>
        Oops. You have ran into an accidental Bug.
      </div>
      <button
        className={Styles.button}
        onClick={handleRedirect}
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;