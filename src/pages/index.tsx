import React, { ReactElement, useState } from "react";
import QRCode from "qrcode.react";
// import QrReader from 'react-qr-reader';
// import QrReader from 'react-qr-scanner';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import TextArea from '../components/textArea';
import SelectBox from '../components/selectBox';
import ConfirmDialog from '../components/confirmDialog';
import { useIntl } from "gatsby-plugin-intl";
const QrReader = React.lazy(() => import("react-qr-reader"));

type levelType = "L" | "M" | "Q" | "H" | undefined;

function Index(): ReactElement {
  const [text, setText] = useState('sample');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [level, setLevel] = useState<levelType>("L");
  const [open, setOpen] = useState(false);
  const [scan, setScan] = useState('');
  const intl = useIntl();

  const textChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  const backgroundColorChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setBackgroundColor(e.target.value);
  };
  
  const foregroundColorChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setForegroundColor(e.target.value);
  };

  const levelChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    const val: levelType = e.target.value as levelType;
    setLevel(val);
  };

  const openConfirmDialog = (isOpen: boolean) =>{
    setOpen(isOpen);
  };

  const handleScan = (data: string | null) => {
    if (data) {
      setScan(data);
    }
  };

  const handleError = (err: any) => {
    alert(intl.formatMessage({ id: "qrCode.error" }));
    console.error(err);
  };

  const levels = ["L", "M", "Q", "H"];

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qrCode") as HTMLCanvasElement;
    const pngUrl = canvas!
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `QRCode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Layout>
      <SEO 
        title={intl.formatMessage({ id: "title" })}
        description={intl.formatMessage({ id: "description" })} 
      />
      <div className="overflow-hidden">
        <div className="flex justify-center mb-10">
          <QRCode 
            id="qrCode"
            value={text} 
            size={128}
            bgColor={backgroundColor}
            fgColor={foregroundColor}
            level={level}
          />
        </div>
        <div className="mb-4 ml-4 mr-4">
          <TextArea 
            htmlFor="qrText"
            title={intl.formatMessage({ id: "qrCode.text" })}
            type="text"
            placeholder="例) https://www.riml.work"
            onChange={textChange}
          />
          <TextArea 
            htmlFor="bgColor"
            title={intl.formatMessage({ id: "qrCode.backgroundColor" })}
            type="text"
            placeholder="#FFFFFF"
            onChange={backgroundColorChange}
          />
          <TextArea 
            htmlFor="fgColor"
            title={intl.formatMessage({ id: "qrCode.foregroundColor" })}
            type="text"
            placeholder="#000000"
            onChange={foregroundColorChange}
          />
          <SelectBox
            htmlFor="select"
            title={intl.formatMessage({ id: "qrCode.level" })}
            value={level}
            options={levels}
            onChange={levelChange}
          />
          <div className="flex justify-center mt-10">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"
              onClick={downloadQRCode}
            >
              {intl.formatMessage({ id: "save" })}
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => openConfirmDialog(true)}
            >
              {intl.formatMessage({ id: "scan" })}
            </button>
            <ConfirmDialog
              title={intl.formatMessage({ id: "dialog.title" })}
              open={open}
              onClose={() => openConfirmDialog(false)}
            >
              <div className="mb-5">
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <span className="text-gray-700">{intl.formatMessage({ id: "dialog.detail" })}</span>
                <p className="text-gray-700 ml-3 mt-2">{scan}</p>
              </div>
            </ConfirmDialog>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
