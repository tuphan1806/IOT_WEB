import React, { useState, useEffect } from 'react';
import '../../styles/Status.css';

// Hàm để lấy gradient màu dựa trên giá trị và loại cảm biến
function getStatusGradient(value, name) {
  // Định nghĩa các ngưỡng giá trị cho từng loại cảm biến
  const thresholds = {
    temperature: {
      low: 10,
      medium: 20,
      high: 30,
    },
    humidity: {
      low: 30,
      medium: 50,
      high: 70,
    },
    brightness: {
      low: 100,
      medium: 300,
      high: 400,
    },
  };

  // Định nghĩa các gradient màu tương ứng với các ngưỡng giá trị
  const gradients = {
    temperature: {
      low: 'linear-gradient(to bottom, #00FFFF, #0000FF)',
      medium: 'linear-gradient(to bottom, #F0DE4D, #F0B64D)',
      high: 'linear-gradient(to bottom, #FF0000, #FFFF00)',
    },
    humidity: {
      low: 'linear-gradient(to bottom, #4DCFF0, #4D9BF0)',
      medium: 'linear-gradient(to bottom, #4DCFF0, #0E30F0)',
      high: 'linear-gradient(to bottom, #075EAA, #010F79)',
    },
    brightness: {
      low: 'linear-gradient(to bottom, #D9BF00, #9B9E00)',
      medium: 'linear-gradient(to bottom, #D9BF00, #FBFF00)',
      high: 'linear-gradient(to bottom, #FBFF00, #FFE100)',
    },
  };

  // Lựa chọn gradient màu dựa trên giá trị của cảm biến
  if (value < thresholds[name].low) {
    return gradients[name].low;
  } else if (thresholds[name].low <= value && value < thresholds[name].medium) {
    return gradients[name].medium;
  } else if (value >= thresholds[name].medium) {
    return gradients[name].high;
  }
}

// Component Status nhận vào props name và data
function Status({ name, data }) {
  // Khởi tạo state cho background gradient
  const [backgroundGradient, setBackgroundGradient] = useState(
    getStatusGradient(data, name)
  );

  // useEffect để cập nhật background gradient khi data hoặc name thay đổi
  useEffect(() => {
    setBackgroundGradient(getStatusGradient(data, name));
  }, [data, name]);

  let imgSrc, label;

  // Sử dụng switch để đặt giá trị cho imgSrc và label dựa trên loại cảm biến
  switch (name) {
    case 'temperature':
      imgSrc = '/imgs/status/temperature.png';
      label = `${data} °C`;
      break;
    case 'humidity':
      imgSrc = '/imgs/status/humidity.png';
      label = `${data} %`;
      break;
    case 'brightness':
      imgSrc = '/imgs/status/brightness.png';
      label = `${data} Lux`;
      break;
    default:
      break;
  }

  // Trả về JSX để hiển thị trạng thái cảm biến
  return (
    <div className="status" style={{ background: backgroundGradient }}>
      <div className="card">
        <div>
          <div className="numbers">
            <label htmlFor={name} className="label">
              {label}
            </label>
          </div>
          <div className="cardName">{name}</div>{' '}
        </div>

        <div className="iconBx">
          <img
            src={imgSrc}
            alt={name}
            className="sensor-img"
            style={{ width: '80px', height: '80px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Status;
