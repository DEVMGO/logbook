import React from 'react';
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import Folder from '../../../public/images/folder.svg';
import styles from './dropzone.module.css';

function Dropzone(props) {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="container">
            <div {...getRootProps({ className:styles['dropzone']})}>
                <input {...getInputProps()} />
                <Image src={Folder} alt="folder" />
                <p>برای بارگذاری یک فایل را بکشید و رها کنید یا روی
                    <button type="button" onClick={open}>
                        افزودن فایل
                    </button>
                    کلیک کنید
                </p>
            </div>
            <aside>
                {/* <h4>Files</h4> */}
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

export default Dropzone;