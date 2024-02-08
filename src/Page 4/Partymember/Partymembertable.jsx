import { data } from "../../Contents/Partymember"

const Partymembertable = () => {
    return(
        <div className="max-w-7xl mx-auto my-20 grid gap-20 px-2">
            <div className="overflow-x-auto bg-white ">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {/* ประธานนักเรียน */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover">
                    <th>{data.Number1}</th>
                    <td>{data.Name1}</td>
                    <td>{data.Class1}</td>
                    <td>{data.Position1}</td>
                  </tr>               
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto bg-white  ">
              <table className="table">
                {/* เลขานุการ */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>{data.Number2}</th>
                    <td>{data.Name2}</td>
                    <td>{data.Class2}</td>
                    <td>{data.Position2}</td>
                  </tr>               
                </tbody>
               
              </table>
            </div>

            

            <div className="overflow-x-auto bg-white ">
              <table className="table">
                {/* Head */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>

                <tbody>
                  {/* กรรมการนักเรียนฝ่ายกิจการนักเรียน */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>{data.Number3}</th>
                    <td>{data.Name3}</td>
                    <td>{data.Class3}</td>
                    <td>{data.Position3}</td>
                  </tr>               
                </tbody>
                
                <tbody>
                  {/* รองประธานนักเรียนฝ่ายวิชาการ */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>{data.Number4}</th>
                    <td>{data.Name4}</td>
                    <td>{data.Class4}</td>
                    <td>{data.Position4}</td>
                  </tr>               
                </tbody>
                
                <tbody>
                  {/* รองประธานนักเรียนฝ่ายกีฬาและนันทนาการ */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>{data.Number5}</th>
                    <td>{data.Name5}  </td>
                    <td>{data.Class5}</td>
                    <td>{data.Position5}</td>
                  </tr>               
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto bg-white  ">
              <table className="table">
                {/* กรรมการนักเรียนฝ่ายกิจการนักเรียน */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>1</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position6}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>2</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position7}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>3</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position8}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>4</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position9}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>5</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position10}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>6</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position11}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>7</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position12}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>8</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position13}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>9</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position14}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>10</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position15}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>11</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position16}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>12</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position17}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>13</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position18}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>14</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position19}</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>15</th>
                    <td></td>
                    <td></td>
                    <td>{data.Position20}</td>
                  </tr>               
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto bg-white  ">
              <table className="table">
                {/* กรรมการนักเรียนฝ่ายวิชาการ */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>1</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>2</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>3</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>4</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>5</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>6</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>7</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>8</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>9</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>10</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>11</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>12</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>13</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>14</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>15</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายวิชาการ</td>
                  </tr>               
                </tbody>
              </table>
            </div>

            

            <div className="overflow-x-auto bg-white  ">
              <table className="table">
                {/* กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ */}
                <thead>
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr]">
                    <th></th>
                    <th>Name</th>                   
                    <th>Class</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>1</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>2</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>3</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>4</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>5</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>6</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>7</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>8</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>9</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>10</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>11</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>12</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>13</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>14</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
                <tbody>
                  {/* row 1 */}
                  <tr className="grid grid-cols-[1fr_5fr_3fr_2fr] hover" >
                    <th>15</th>
                    <td></td>
                    <td></td>
                    <td>กรรมการนักเรียนฝ่ายกีฬาและนันทนาการ</td>
                  </tr>               
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default Partymembertable