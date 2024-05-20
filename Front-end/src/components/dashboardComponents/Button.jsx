import React, { useState, useEffect } from 'react';
import '../../styles/Button.css';

// Định nghĩa component Button với các props: onClick, name và state
function Button({ onClick, name, state }) {
  // Khai báo state cho ảnh nguồn, nhãn và màu nền
  const [imgSrc, setImgSrc] = useState('');
  const [label, setLabel] = useState('Off');
  const [backgroundColor, setBackgroundColor] = useState('#ccc');

  // Sử dụng switch để xác định loại button (Fan, Light, Light2)
  switch (name) {
    // Trường hợp 'Fan'
    case 'Fan':
      // Sử dụng useEffect để cập nhật các state dựa trên props name và state
      useEffect(() => {
        // Đặt đường dẫn ảnh dựa trên trạng thái của quạt
        setImgSrc(
          state === 'On'
            ? '/imgs/adjustments/fanOn.gif'
            : '/imgs/adjustments/fanOff.png'
        );
        // Đặt nhãn dựa trên trạng thái của quạt
        setLabel(state === 'Off' ? 'Off' : 'On');
        // Đặt màu nền dựa trên trạng thái của quạt
        setBackgroundColor(state === 'Off' ? '#ccc' : 'forestgreen');
      }, [name, state]); // useEffect chỉ chạy khi name hoặc state thay đổi
      break;

    // Trường hợp 'Light'
    case 'Light':
      // Tương tự như trên, cập nhật các state cho đèn
      useEffect(() => {
        setImgSrc(
          state === 'On'
            ? '/imgs/adjustments/lightOn.png'
            : '/imgs/adjustments/lightOff.png'
        );
        setLabel(state === 'Off' ? 'Off' : 'On');
        setBackgroundColor(state === 'Off' ? '#ccc' : 'forestgreen');
      }, [name, state]);
      break;

    // Trường hợp 'Light2'
    case 'Light2':
      // Tương tự như trên, cập nhật các state cho đèn thứ hai
      useEffect(() => {
        setImgSrc(
          state === 'On'
            ? '/imgs/adjustments/lightOn.png'
            : '/imgs/adjustments/lightOff.png'
        );
        setLabel(state === 'Off' ? 'Off' : 'On');
        setBackgroundColor(state === 'Off' ? '#ccc' : 'forestgreen');
      }, [name, state]);
      break;

    // Mặc định không làm gì
    default:
      break;
  }

  // Trả về JSX cho button
  return (
    <button
      className="aButton"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={imgSrc} alt="" style={{ width: '30%', height: '60%' }} />
      <label htmlFor="" className="label">
        {label}
      </label>
    </button>
  );
}

export default Button;
