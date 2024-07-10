<<<<<<< HEAD
import { ReportHandler } from 'web-vitals';
=======
import { ReportHandler } from 'web-vitals'
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
<<<<<<< HEAD
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
=======
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
