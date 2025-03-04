const DownloadButton = () => {

  const DownloadResume = () => {
    // using Java Script method to get PDF file
    fetch("public/assets/BangertBridgetResume.pdf").then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "BangertBridgetResume.pdf";
            alink.click();
        });
    });
  };

  return (
    <a href={"public/assets/BangertBridgetResume.pdf"} download="BridgetBangertResume" target='_blank'>
      <button
        className="cursor-pointer bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center"
        onClick={DownloadResume}
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download My Resume</span>
      </button>
    </a>
  );
}

export default DownloadButton;