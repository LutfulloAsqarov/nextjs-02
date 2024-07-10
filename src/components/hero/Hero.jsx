"use client";
import React from "react";
import "./hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "@/app/redux/counterSlice";

const Hero = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div id="hero">
            <div className="container hero">
                <div className="hero__wrapper">
                    <span className="hero__wrapper__icon">🌱</span>
                    <h1> The nature candle</h1>
                    <p>
                        All handmade with natural soy wax, Candleaf is a
                        companion for all your pleasure moments
                    </p>
                    <button className="hero__btn">
                        Discovery our collection
                    </button>

                    <div className="hero__count">
                        <button
                            disabled={count === 0}
                            onClick={() => dispatch(dec())}
                        >
                            -
                        </button>
                        <span className="w-5 text-center">{count}</span>
                        <button onClick={() => dispatch(inc())}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
