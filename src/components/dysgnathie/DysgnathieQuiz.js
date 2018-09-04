import React from 'react';
import Iframe from 'react-iframe'
function DysgnathieQuiz(props) {
  return (
      <div
        role="tabpanel"
        className="tab-pane active"
        id="allgemein">
        <div className="row">
          <Iframe
            id="iframeAllgemein"
            url ="src\components\dysgnathie\quiz\allgemein\index.html" />
        </div>
      </div>

  );
}

export default DysgnathieQuiz;
