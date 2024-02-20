import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [ showModal , setShowModal ] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
          <Button onClick={handleClose} primary>
            I Accept
          </Button>
        </div>
      );

    const modal =(
     < Modal onClose={handleClose} actionBar={actionBar}>
        <p>
           HERE IS AN IMPORTANT AGREEMENT for you to accept
        </p> 
     </Modal>
     );
        


  return(
  <div>
    <Button onClick={handleClick} primary> 
    Open Modal! 
    </Button>
   {showModal && modal}
   
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus accumsan urna, euismod mollis nulla malesuada fringilla. Etiam eget imperdiet orci. Fusce tempor posuere nisi, vel rutrum diam facilisis in. Cras cursus et sapien a lobortis. Nunc quis tortor augue. Praesent massa eros, blandit in accumsan et, tincidunt sit amet orci. Praesent efficitur nunc at orci congue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque semper neque vestibulum gravida. Curabitur a turpis in nisl ultricies lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet blandit arcu. Phasellus sollicitudin vehicula commodo. Quisque lobortis sapien in dolor placerat ultrices. Vivamus vel dolor non elit scelerisque molestie et ac ante. 
   </p>

  </div>
    );
  }

export default ModalPage;