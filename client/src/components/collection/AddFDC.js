import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createFDC } from '../../actions/profile';

const AddFDC = ({ createFDC, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    scottNum: '',
    collinsNum: '',
    issueDate: '',
    year: '',
    location: '',
    price: '',
    value: '',
    quantity: '',
    group: '',
    chachetmaker: '',
    series: '',
    denomination: '',
    format: '',
    variety: '',
    partOfSet: false,
    description: '',
  });

  // useEffect(() => {

  //   setFormData({
  //   title: title,
  //   scottNum: scottNum,
  //   collinsNum: collinsNum,
  //   issueDate: issueDate,
  //   year: year,
  //   location: location,
  //   price: price,
  //   value: value,
  //   quantity: quantity,
  //   group: group,
  //   chachetmaker: chachetmaker,
  //   series: series,
  //   denomination: denomination,
  //   format: format,
  //   variety: variety,
  //   partOfSet: partOfSet,
  //   description: description,
  //   });
  // }, []);

  const {
    title,
    scottNum,
    collinsNum,
    issueDate,
    year,
    location,
    price,
    value,
    quantity,
    group,
    chachetmaker,
    series,
    denomination,
    format,
    variety,
    partOfSet,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createFDC(formData, history);
    console.log('submit');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add FDC</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Scott Number'
            name='scottNum'
            value={scottNum}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder="Collin's Number"
            name='collinsNum'
            value={collinsNum}
            onChange={(e) => onChange(e)}
          />
          <input
            type='date'
            placeholder='Issue Date'
            name='issueDate'
            value={issueDate}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Year'
            name='year'
            value={year}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Value'
            name='value'
            value={value}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Quantity'
            name='quantity'
            value={quantity}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Group'
            name='group'
            value={group}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Chachet Maker'
            name='chachetmaker'
            value={chachetmaker}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Series'
            name='series'
            value={series}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Denomination'
            name='denomination'
            value={denomination}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Format'
            name='format'
            value={format}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Variety'
            name='variety'
            value={variety}
            onChange={(e) => onChange(e)}
          />
          <input
            type='bool'
            placeholder='Part of set?'
            name='partOfSet'
            value={partOfSet}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Description'
            name='Description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/edit-collection'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddFDC.propTypes = {
  createFDC: PropTypes.func.isRequired,
};

export default connect(null, { createFDC })(withRouter(AddFDC));
