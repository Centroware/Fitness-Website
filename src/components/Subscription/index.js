import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import Spinner from "../../components/Spinner";
import styles from "./Subscription.module.sass";
import Icon from "../Icon";
import { API_URL, PROXY_SERVER_URL, SUBSCRIPTION_PATH, VERSION } from "../../config";

const Subscription = ({ className, placeholder }) => {
  const { t } = useTranslation("footer");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const data = {
        email
      };

      const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/${VERSION}/${SUBSCRIPTION_PATH}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (req.status === 400) {
        toast.error(t("sections.subscription.invalid_email"));
        setLoading(false);
        return;
      }

      toast.success(t("sections.subscription.subscribed"));
      setEmail("");
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder={placeholder}
        required
        disabled={loading}
      />


      {loading ? <div className="mb-2 md:mb-0 max-h-0"> <Spinner /></div> : <button disabled={loading} className={styles.btn} type="submit">
        <Icon name="arrow-right" size="14" />
      </button>}
    </form>
  );
};

export default Subscription;
