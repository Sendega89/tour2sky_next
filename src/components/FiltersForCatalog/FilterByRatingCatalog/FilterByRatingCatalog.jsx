import React from 'react';
import s from "./FilterByRatingCatalog.module.css"
const FilterByRatingCatalog = ({changeCheckBox}) => {
    return (
        <div className={s.filterByRatingContainer}>
            <h4>Filter by Rating</h4>
                <div>
                    <div className={s.checkbox_item}>
                        <label className={s.customBigCheckbox}>
                            <input type="checkbox" id="5" value={5}
                                    onChange={changeCheckBox}
                            />
                            <span className={s.customBigCheckbox__checkbox}/>
                        </label>
                        <span className={s.labelText}>5 star</span>
                    </div>
                    <div className={s.checkbox_item}>
                        <label className={s.customBigCheckbox}>
                            <input type="checkbox" id="4" value={4}
                                    onChange={changeCheckBox}/>
                            <span className={s.customBigCheckbox__checkbox}/>

                        </label>
                        <span className={s.labelText}>4 star</span>
                    </div>
                    <div className={s.checkbox_item}>
                        <label className={s.customBigCheckbox}>
                            <input type="checkbox" name="3" id="3" value={3}
                                    onChange={changeCheckBox}/>
                            <span className={s.customBigCheckbox__checkbox}/>
                        </label>
                        <span className={s.labelText}>3 star</span>
                    </div>
                    <div className={s.checkbox_item}>
                        <label className={s.customBigCheckbox}>
                            <input type="checkbox" id="2" value={2}
                                    onChange={changeCheckBox}/>
                            <span className={s.customBigCheckbox__checkbox}/>

                        </label>
                        <span className={s.labelText}>2 star</span>
                    </div>
                    <div className={s.checkbox_item}>
                        <label className={s.customBigCheckbox}>
                            <input type="checkbox" id="1" value={1}
                                    onChange={changeCheckBox}/>
                            <span className={s.customBigCheckbox__checkbox}/>

                        </label>
                        <span className={s.labelText}>1 star</span>
                    </div>
                </div>
        </div>
    );
};

export default FilterByRatingCatalog;