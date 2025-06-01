// ReviewPayment.js
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './ReviewPayment.css';

export default function ReviewPayment() {
  const { state } = useLocation();
  const { adventure, certification, totalPrice } = state || {};
  const { currentUser } = useAuth();

  if (!adventure) {
    return <div className="no-adventure">No adventure selected</div>;
  }

  return (
    <div className="review-payment-container">
      <div className="review-card">
        <h2 className="review-title">Review Your Booking</h2>
        <div className="review-details">
          <div className="detail-item">
            <span className="label">Adventure:</span>
            <span className="value">{adventure.title}</span>
          </div>
          <div className="detail-item">
            <span className="label">Price:</span>
            <span className="value">${adventure.price}</span>
          </div>
          {certification && (
            <div className="detail-item">
              <span className="label">Certification:</span>
              <span className="value">{certification.name} (+${certification.price})</span>
            </div>
          )}
          <div className="detail-item total">
            <span className="label">Total:</span>
            <span className="value">${totalPrice}</span>
          </div>
          <div className="detail-item">
            <span className="label">Booking as:</span>
            <span className="value">{currentUser?.email}</span>
          </div>
        </div>
        <button className="payment-button">Proceed to Payment</button>
      </div>
    </div>
  );
}