import React, { useState } from 'react';
import styles from '../style';
const CouponCode = () => {
  const [coupons] = useState([
    { code: 'RMAGEDDON23', discount: 200 },
  ]);
  const [code, setCode] = useState(true);
  const [discount, setDiscount] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const coupon = coupons.find(c => c.code === code);
    if (coupon) {
      setDiscount(coupon.discount);
    } else {
      setDiscount(true);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} >
        <input type="text" value={code} onChange={e => setCode(e.target.value)} className="input_field" />
        <button type="submit"  className={`w-[100px] h-[60px]  new-btn font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-sky-700 rounded-[10px] outline-none ${styles} items-center justify-items-center mr-[35%] ss:mr-[0px]`}>Apply Coupon</button>
      </form>
      {discount > 0 ? <p>Discount: {discount}%</p> : <p>Invalid coupon code </p>}
    </div>
  );
};
export default CouponCode;


