import React, { ReactElement, Suspense, useState } from "react";
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

  const backgroundColorBlur = (e: { target: { value: string | string[]; }; }) => {
    if (!e.target.value.includes('#')) {
      setBackgroundColor('#FFFFFF');
    }
    if (e.target.value.length < 4) {
      setBackgroundColor('#FFFFFF');
    } else if (e.target.value.length >= 8) {
      setBackgroundColor('#FFFFFF');
    }
  };

  const foregroundColorBlur = (e: { target: { value: string | string[]; }; }) => {
    if (!e.target.value.includes('#')) {
      setForegroundColor('#000000');
    }
    if (e.target.value.length < 4) {
      setForegroundColor('#000000');
    } else if (e.target.value.length >= 8) {
      setForegroundColor('#000000');
    }
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
            onBlur={backgroundColorBlur}
          />
          <TextArea 
            htmlFor="fgColor"
            title={intl.formatMessage({ id: "qrCode.foregroundColor" })}
            type="text"
            placeholder="#000000"
            onChange={foregroundColorChange}
            onBlur={foregroundColorBlur}
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
            {/* TODO: lazy importをした際QR読み込みが失敗するため動くようにする */}
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
                <Suspense fallback={
                  <svg
                  className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      stroke-width="4"
                    />
                    <path
                      className="opacity-75"
                      fill="gray"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                }>
                  <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                  />
                </Suspense>
              </div>
              <div>
                <span className="text-gray-700">{intl.formatMessage({ id: "dialog.detail" })}</span>
                <p className="text-gray-700 ml-3 mt-2 whitespace-normal break-all">{scan}</p>
              </div>
            </ConfirmDialog>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
