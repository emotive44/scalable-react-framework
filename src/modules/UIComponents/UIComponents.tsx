import React, { FC } from 'react';
import classes from './UIComponents.module.scss';

import useForm from '../../shared/hooks/useForm';

import {
  Input, TextArea, CheckBox, RadioBtn,
  Toggle, InfoBox, Divider, Tooltip,
  Button, Avatar, Dots, Note, NotFound, Accordion,
  Text, Notification, Modal, CustomScroll, Tabs, Tab,
  Datepicker, RangeSlider, Carousel, Select, Option,
  Tag, PhoneInput, ImageGallery
} from '../../shared/library';

import arrayWithImgs from '../../shared/mocks/images';


const UIComponents:FC = () => {
  const { 
    state, 
    errors,
    activeRadio,
    dateChangeHandler,
    inputChangeHandler,
    phoneChangeHandler,
    selectChangeHandler,
    radioBtnChangeHandler,
    checkBoxChangeHandler,
  } = useForm(
    {
      age           : '',
      job           : '',
      bio           : '',
      car           : '',
      name          : '',
      cars          : [],
      email         : '',
      phone         : '',
      range         : '',
      salary        : '',
      search        : '',
      password      : '',
      thirdBio      : '',
      secondBio     : '',
      thirdEmail    : '',
      secondEmail   : '',
      radio1        : true,
      male          : false,
      other         : false,
      female        : false,
      radio2        : false,
      toggle1       : false,
      toggle2       : false,
    },
    'radio1',
    { radio1: false, radio2: false }
  );

  const submitHandler = () => {
    console.log(state);
  }

  const ModalFooter = (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>Modal Footer</div>
      <Button>Send</Button>
    </div>
  );

  const ModalMain = (
    <div>
      <p>Custom Modal Main Content Custom Modal Main Content Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
    </div>
  );

  return (
    <>
      {/* <Modal 
        main                  = {ModalMain}
        title                 = "Modal Title"
        footer                = {ModalFooter}
      />
     */}
      <span onClick={submitHandler}>Submit</span>
      <div className={classes.app}>
        <div>
          <Input
            mediumInput
            label             = "Age"
            name              = "age"
            type              = "number"
            value             = {state.age}
            err               = {errors.age}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input
            leftIcon
            largeInput
            labelInside
            name              = "name"
            type              = "text"
            label             = "Username"
            pattern           = {"[A-Z]+"}
            value             = {state.name}
            err               = "error message"
            callbackChange    = {inputChangeHandler}
            icon              = {<i className="fas fa-user" />}
          />
        </div>

        <div>
          <Input 
            label             = "Job"
            name              = "job" 
            type              = "text" 
            value             = {state.job}
            defaultValue      = "programmer" 
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            step              = {500} 
            defaultValue      = {500} 
            label             = "Count"
            type              = "number" 
            name              = "salary" 
            value             = {state.salary}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            name              = "password"
            type              = "password" 
            label             = "password" 
            value             = {state.password}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            leftIcon 
            mediumInput 
            name              = "email"
            type              = "email"  
            placeHolder       = "Email" 
            value             = {state.email}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            largeInput 
            labelInside 
            type              = "email" 
            label             = "Email" 
            name              = "secondEmail"
            value             = {state.secondEmail}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            largeInput 
            leftIcon 
            type              = "email" 
            label             = "Email"
            name              = "thirdEmail"
            value             = {state.thirdEmail}
            callbackChange    = {inputChangeHandler} 
            />
        </div>
        <div>
          <Input 
            leftIcon 
            type              = "search" 
            name              = "search"
            placeHolder       = "Search" 
            value             = {state.search}
            callbackChange    = {inputChangeHandler}
          />
        </div>

        <div>
          <TextArea 
            name              = "bio"
            label             = "secondBio"
            value             = {state.bio}
            placeHolder       = "Bio" 
            calbackChange     = {inputChangeHandler}
          />
        </div>
        <div>
          <TextArea 
            labelLeft 
            id                = "sBio"
            label             = "secondBio"
            name              = "secondBio"
            calbackChange     = {inputChangeHandler} 
            value             = {state.secondBio}
          />
        </div>
        <div>
          <TextArea 
            readonly 
            disabled 
            nonResize 
            labelRight 
            name              = "thirdBio"
            label             = "right Label" 
            calbackChange     = {inputChangeHandler}
            value             = {state.thirdBio}
            defaultValue      = "readonly + disabled" 
          />
        </div>

        <div className={classes.flex}>
          <CheckBox 
            name              = "male"
            label             = "Male"
            checked           = {state.male}
            callbackChange    = {checkBoxChangeHandler}
          />
          <CheckBox 
            leftLabel 
            name              = "female"
            label             = "Female"
            checked           = {state.female}
            callbackChange    = {checkBoxChangeHandler}
          />
          <CheckBox 
            name              = "other"
            label             = "Other"
            checked           = {state.other}
            callbackChange    = {checkBoxChangeHandler}
          />
        </div>

        <div className={classes.flex}>
          <RadioBtn 
            leftLabel
            name              = "radio1"
            label             = "Radio1"
            callbackChange    = {radioBtnChangeHandler}
            checked           = {activeRadio === "radio1"}
          />
          <RadioBtn 
            name              = "radio2"
            label             = "Radio2"
            callbackChange    = {radioBtnChangeHandler}
            checked           = {activeRadio === "radio2"}
          />
        </div>

        <div className={classes.flex}>
          <Toggle 
            leftLabel
            name              = "toggle1"
            label             = "Toggle"
            checked           = {state.toggle1}
            callbackChange    = {checkBoxChangeHandler}
          />
          <Toggle 
            name              = "toggle2"
            label             = "Toggle"
            checked           = {state.toggle2}
            callbackChange    = {checkBoxChangeHandler}
          />
        </div>

        <InfoBox title='Title'>
          <h3>Subtitle</h3>
          <p>Content</p>
        </InfoBox>

        <Divider title="Title" />

        <Divider icon={<i className="fas fa-user" />} horizontal/>

        <p></p>

        <Tooltip message="Tooltip message Tooltip message">
          <p>Tooltip top</p>
        </Tooltip>

        <Tooltip position="left"  message="Tooltip message Tooltip message ">
          <p>Tooltip left</p>
        </Tooltip>

        <Tooltip position="right"  message="Tooltip message Tooltip message Tooltip message Tooltip message Tooltip message ">
          <p style={{textAlign: 'right'}}>Tooltip right</p>
        </Tooltip>

        <p></p>

        <Tooltip position="bottom"  message="Tooltip message Tooltip message ">
          <p>Tooltip bottom</p>
        </Tooltip>

        <div className={classes.flex}>
          <Button>Send Message</Button>
          <Button type="secondary">Send Message</Button>
          <Button type="success" outline>Send Message</Button>
          <Button type="danger">Send Message</Button>
        </div>

        <div className={classes.flex}>
          <Button type="warning">Send Message</Button>
          <Button type="light">Send Message</Button>
          <Button type="dark" loading>Send Message</Button>
          <Button type="link" href="login" newBlank >
            <i className="fas fa-user" />
            Go to link
          </Button>
        </div>

        <div className={classes.flex}>
          <Avatar abbr="Marko Streleshki" />
          <Avatar abbr="Vildan V" />
          <Avatar abbr="Georgi A" />
          <Avatar abbr="Nikolay" />
          <Avatar 
            abbr               = "Marko"
            image              = "https://scontent.fsof10-1.fna.fbcdn.net/v/t1.0-9/45359201_1776432789146396_8383390134426402816_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=5wNW7SAVCi4AX8lVXUs&_nc_ht=scontent.fsof10-1.fna&oh=ca606891013e8a76f3b6a09ed3024476&oe=605B32E0" 
          />
        </div>
      
        <Dots 
          count                =  {4} 
          dotSize              =  {5}
          dotColor             =  '#b6babd'
        >
          Some Text
        </Dots>
     
        <Note size={15} >
          This is note
        </Note>

        <p>-</p>

        <Accordion>
          <div title = 'First Title'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
          <div title = 'Third Title'>
            <i className="fas fa-user" />
            <span style={{ display: 'inline-block', margin: '0.5rem 0 0 1rem' }} >Some text</span>
          </div>
        </Accordion>

        <Accordion multipleOpen>
          <div title = 'Multi open'>
            <p>Multi open</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
        </Accordion>

        <Accordion 
                                  // check for size of window, like media query 
          maxWidth             = {window.innerWidth > 800 ? 40 : 11} 
          sectionHeight        = {15} 
          horizontal 
        >
          <div title = 'Multi open'>
            <p>Multi open Multi open</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text sa djasdj oaisdj saoid jaosidj aosidji aod a</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
        </Accordion>

        <Text
          fontSize             = {18}
          lineHeight           = {30}
          textIndent           = {20}
          wordSpacing          = {10}
          letterSpacing        = {10}
          color                = 'red'
          verticalAlign        = "top"
          fontWeight           = "900"
          textAlign            = "right"
          textTransform        = 'uppercase'
          textDecoration       = {['line-through', 'overline', 'underline']}
        >
          text component
        </Text>

        <CustomScroll size="small" >
          <div style={{ height: '6rem', width: '5rem', margin: '0 auto'}}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </CustomScroll>

        <Datepicker 
          name                  = "date"
          label                 = "Your Label"
          maxDate               = "2020-03-12"
          minDate               = "2020-01-12"
          callbackChange        = {dateChangeHandler}
        />

        <Tabs position="top">
          <Tab 
            label="tabname1"
            tabName="Tabname1" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 1 Content</p>
              <p>1111</p>
          </Tab>
          <Tab 
            label="tabname-user"
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 2 Content</p>
              <p>2222</p>
          </Tab>
          <Tab 
            label="tabname3"
            tabName="Tabname3"
          >
              <p>Tabname 3 Content</p>
              <p>3333</p>
          </Tab>
        </Tabs>

        <RangeSlider
          minValue              = {1}
          maxValue              = {99}
          defaultValue          = {21}
          name                  = "range"
          value                 = {state.range}
          onChange              = {inputChangeHandler}
        />

        <div style={{ maxHeight: '10rem', minWidth: '25rem' }}>    
          <Select 
            clearable
            searchable
            name                = "car"
            optsMaxHeight       = {300}
            label               = "Car Model"
            value               = {state.car}
            placeholder         = "Select car...."
            err                 = "Please select value"
            onChange            = {selectChangeHandler}
          > 
            <Option 
              label             = {'Label Option Audi'} 
              icon              = {<i className="fas fa-user" />} 
              value             = {{car: 'Audi', model: 'A4', id: 1}} 
            />
            <Option 
              label             = {'Label Option BMW'} 
              icon              = {<i className="fas fa-user" />} 
              value             = {{car: 'BMW', model: '330', id: 2}} 
            />
            <Option 
              label             = {'Label Option Opel'} 
              icon              = {<i className="fas fa-user" />}
              value             = {{car: 'Opel', model: 'Astra', id: 3}} 
            />
            <Option 
              label             = {'Label Option Mercedes'} 
              icon              = {<i className="fas fa-user" />} 
              value             = {{car: 'Mercedes', model: 'C200', id: 4}} 
            />
            <Option value={'Renault'}> 
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <span>Custom Template</span>
                <small>one</small>
                <p>Two</p>
              </div>
            </Option>
          </Select>
        </div>

        
        <div>    
          <Select
            multiple
            clearable
            searchable
            optsMaxHeight       = {300}
            name                = "cars"
            placeholder         = "Select car...."
            label               = "Car Model Multi"
            value               = {state.cars}
            onChange            = {selectChangeHandler}
          > 
            <Option 
              label             = {'Audi!'} 
              icon              = {<i className="fas fa-user" />} 
              value             = {{car: 'Audi', model: 'A4', id: 1}} 
            />
            <Option 
              label             = {'BMW!'} 
              icon              = {<i className='fas fa-times' />} 
              value             = {{car: 'BMW', model: '330', id: 2}} 
            />
            <Option value={{car: 'Opel', model: 'Astra', id: 3}} label={'Opel!'} >
              <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <small
                  style={{width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'red'}}
                />
                <span>User one</span>
              </div>
            </Option>
            <Option 
              label             = {'Mercedes!'} 
              icon              = {<i className="fas fa-user" />}
              value             = {{car: 'Mercedes', model: 'C200', id: 4}} 
            />
          </Select>
        </div>

        <PhoneInput 
          name                  = 'phone'
          label                 = 'Your Phone'
          value                 = {state.phone}
          err                   = {errors.phone}
          callbackChange        = {phoneChangeHandler}
        />
      </div>

      {/* <div style={{ width: '70%', margin: '1rem auto', height: '30rem'}} >
        <Tabs position="right">
          <Tab 
            label="tab1"
            tabName="Tabname1 ds dfdsf sdf fsd " 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 1 Content</p>
              <p>1111</p>
          </Tab>
          <Tab 
            label="tab-user"
            tabName="Tabname two" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 2 Content</p>
              <p>2222</p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam iure nobis, dolore aliquid dolorum necessitatibus tempora numquam, earum sint accusantium, ducimus molestias quisquam quaerat ea asperiores temporibus ut adipisci veritatis optio. Ipsa numquam illo nobis voluptates perferendis, in temporibus illum nihil culpa consectetur iusto cupiditate esse eos voluptatum earum? Eum ut obcaecati dolor. Architecto laborum iste animi libero quas magnam.
          </Tab>
          <Tab 
            label="tab3"
            tabName="Tabname thee" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 3 Content</p>
              <p>3333</p>
          </Tab>
        </Tabs>
      </div> */}

      <Notification
        type                  = "warning"
        title                 = "Warning"
        position              = "bottom-left"
        message               = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum."
        autoClose
        secondsDelay          = {3}
      />

      <div className={classes.flex}>
        <Tag type="warning" text="Some Text" closeClickCallback={() => {}} />
        <Tag type="dark" text="Some Text" closeClickCallback={() => {}} />
        <Tag type="success" text="Some Text" />
        <Tag type="light" text="Text" closeClickCallback={() => {}} />
        <Tag type="danger" text="Text" icon={<i className="fas fa-user" />} closeClickCallback={() => {}} />
        <Tag type="secondary" closeClickCallback={() => {}}> 
          <p>ONE</p>
          <span>Username</span>
          <small 
            style={{width: '25px', height: '25px', margin: '0 1rem', backgroundColor: 'red', borderRadius: '50%'}}
          />
         </Tag>
      </div>

      <div style={{ width: '90%', margin: '10rem auto', height: '45rem' }}>
        <Carousel 
          imgsData={arrayWithImgs} 
          // clickImgChange
          withFooter
        />
      </div>

      <div style={{ width: '90%', margin: '0 auto' }}>
        <ImageGallery imgsData={arrayWithImgs} />
      </div>

      <Button fullWidth>
        Full width button
      </Button>

      <NotFound 
        title                 = "Not Found Page" 
        message               = "Some message" 
        icon                  = {<i className="fas fa-user" />}
      >
          <div>Children Content</div>
      </NotFound>
    </>
  );
}

export default UIComponents;
