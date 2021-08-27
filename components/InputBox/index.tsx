import { FC, ChangeEvent, useState } from 'react';
import styles from './inputBox.module.scss'
import assets from '../../assets';
import ToolTip from '../ToolTip';

const InputBox: FC = () => {

    const [inFocus, setInFocus] = useState<boolean>(false);
    const [toolTipActive, setToolTipActive] = useState<boolean>(false);

    const ar: string[] = ['loading', 'success', 'failed'];

    const [inPut, setInPut] = useState<string>('');

    const handleInput = (e: any) => {
        setInPut(e.currentTarget.value);
    }

    const handleFocus = () => {
        setInFocus(f => !f);
    }

    const infoBoxText: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.', 'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.', 'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.'];


    return (
        <div className={inFocus ? styles.tokenInputFocus : styles.tokenInput}>
            <input type="text" placeholder={"Enter Token address"} value={inPut} onChange={(e) => { handleInput(e) }} onFocus={handleFocus} onBlur={handleFocus} />
            {inPut == ar[0] && <img className={styles.loading} src={assets.loading} alt="" />}
            {inPut == ar[1] && <img className={styles.success} src={assets.success} alt="" />}
            {inPut == ar[2] && <img className={styles.failed} src={assets.failed} alt="" />}
            {inPut.length <= 0 && <img src={assets.help} alt="" onMouseEnter={() => setToolTipActive(true)} />}
            {toolTipActive && <ToolTip closeToolTip={() => { setToolTipActive(false) }} infoBoxText={infoBoxText} />}
        </div>
    );
};

export default InputBox;