/* eslint-disable import/first */
import React from 'react';
import { Col, Icon , Button } from 'antd';
import RelatedTopic from "./../../../problem/RelatedTopic";
import SimilarQuestion from "./../../../problem/SimilarQuestion";
import Company from "./../../../problem/Company";

export default class Description extends React.Component{
  render() {
    return (
      <Col span={24} >
        <div className="description content">
           <div className="description-content">
          <div className="question-title css-v3d350">771. Two Sum</div>
          <div className="css-10o4wqw">
            <span diff="easy" className="css-14oi08n easy">Easy</span>
            <Icon type="like" className="icon" /><span>2555</span> 
            <Icon type="dislike" className="icon"  /><span>2555</span> 
            <Icon type="heart" className="icon"  /><span>Favorite</span> 
            <Icon type="share-alt" className="icon"  /><span>Share</span> 
          </div>
          <div className="content">
            <p>Given an array of integers, return indices of the two numbers such that they add up to a </p>
            <p>specific target.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use </p>
            <p>the same element twice.</p>
            <p>
              <strong>Example</strong>
            </p>
            <pre>
              <p>Given nums = [2, 7, 11, 15], target = 9,</p>

              <p>Because nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,</p>
              return [<strong>0</strong>, <strong>1</strong>].
            </pre>
            <div className="bottom-content">
              <p className="accepted">Accepted <span>2,019,238</span></p>
              <p className="submition">Submissions <span>2,019,238</span></p>
            </div>
          </div>
            <div className="bt-ct-des">
              <Company />
              <RelatedTopic/>
              <SimilarQuestion/>
            </div>
            
        </div>
        </div>
      </Col>
    );
  }
}
