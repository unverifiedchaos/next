import { useState } from "react";
import { FC } from "react";
import assets from "../../assets";
import styles from './toolTip.module.scss'

interface Props {
    closeToolTip?(): void
    infoBoxText: string[]
}

const ToolTip: FC<Props> = ({ closeToolTip, infoBoxText }) => {

    const [infoIndex, setInfoIndex] = useState<number>(0);

    const nextInfo = () => {
        setInfoIndex((i) => {
            if (i < infoBoxText.length - 1) {
                ++i;
            }
            return i;
        })
    }

    const prevInfo = () => {
        setInfoIndex((i) => {
            if (i > 0) {
                --i;
            }
            return i;
        })
    }

    return (
        <span className={styles.toolTipCon}>
            <span className={styles.arrow} />
            <div className={styles.toolTip}>
                <img src={assets.close} className={styles.close} onClick={closeToolTip} />
                <p className={styles.info}>
                    {infoBoxText[infoIndex]}
                </p>
                <span className={styles.infoPagination}>
                    {(infoIndex > 0) && <img src={assets.prevIcon} className={styles.prev} onClick={prevInfo} />}
                    {(infoIndex < infoBoxText.length - 1) && <img src={assets.nextIcon} className={styles.next} onClick={nextInfo} />}
                </span>

            </div>

        </span >
    );
};

export default ToolTip;