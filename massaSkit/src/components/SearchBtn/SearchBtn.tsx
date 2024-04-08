import React from "react";
import "./SearchBtn.scss";
import JSConfetti from "js-confetti";

type SearchBtnProps = {
  placeholder?: string;
  onSearch?: () => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBtn: React.FC<SearchBtnProps> = ({
  placeholder,
  onSearch,
  onKeyPress,
}) => {
  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value);
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🍆", "🥜"],
      confettiNumber: 100,
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onKeyPress) {
      onKeyPress(event);
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="search-container">
        <form className="form-container">
          <input
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <div className="btn" onClick={handleSearch}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBtn;
