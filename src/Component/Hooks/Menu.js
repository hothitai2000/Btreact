import React, { Component } from 'react';
class DrinkMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'',
            price:'',
            money:''
        }
    }
    checkOrder=(money)=>{
        if(money >=this.state.price){
            alert("ĐỒ uống của bạn đây"+this.state.type+'\nso tiền dư:'+(money-this.state.price)+"đ")
        }
        else{
            alert("không đủ tiền")
        }
    }
     submitForm=(event)=>{
        event.preventDefault();
        if (this.state.price==''){
            alert("vui lòng chọn đồ uống");
        }else{
            if(this.state.money==''){
                alert("vui lòng nhập số tiền của bạn")
            }
            else{
                this.checkOrder(this.state.money)
            }
        }
     }
     setHandel=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        if(name=='money' ){
            if(!Number(value)){
                alert("Nhập số vào bạn ơi")
            }
        }
        if(name=='type'){
            if(value=="cà phê sữa"){
                this.setState({price:12000})
            }
            else if(value=="cà phê đá"){
                this.setState({price:10000})
            }
            else if(value=="Sting đỏ"){
                this.state({price:8000})
            }
            else{
                this.setState({price:20000})
            }
        }
        this.setState({[name]:value})
     }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời chọn thức uống:</td>
                                <td>
                                    <select name='type' onChange={this.setHandel}>
                                        <option selected hidden>Mời chọn</option>
                                        <option value="cà phê sữa">Cà phê sữa</option>
                                        <option value="cà phê đá">Cà phê đá</option>
                                        <option value="sting dâu">Sting dâu</option>
                                        <option value="Trà đá">Trà đá</option>

                                    </select>
                                </td>
                                <td><label>Price---{this.state.price}</label> </td>
                            </tr>
                            <tr>
                                <td>Mời bạn nhập tiền của bạn:</td>
                                <td>
                                    <input name='money' type='number' onChange={this.setHandel}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value="thanh toán"></input>
                </form>
              <h2></h2>
            </div>
        )
    }
}
export default DrinkMenu;