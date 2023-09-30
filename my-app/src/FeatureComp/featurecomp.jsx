import React from "react";
import "./featurecomp.css";
import YES from "../images/YES.png";
import NO from "../images/NO.png";

export default function featurecomp() {
  return (
    <div className="featurecomp-main">
      <h2 className="table-text">
        <span>YOUNOIA</span> vs Traditional In-office therapy
      </h2>

      <table className="featurecomp-table">
        <thead>
          <tr>
            <th></th>
            <th className="table-heading">
              <h2>YOUNOIA</h2>
            </th>
            <th className="table-heading">
              <h2>In-office</h2>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td className="table-cell">
              Provided with credentialled therapist
            </td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">In-office vists</td>
            <td className="tabel-cell2">
              <img src={NO} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={YES} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Messaging any time </td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Chat sessions</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Phone sessions</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Video sessions</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Easy scheduling</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Digital worksheets</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Group sessions </td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Smart provider matching</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Easy to switch providers</td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell">Access therapy from anywhere </td>
            <td className="tabel-cell2">
              <img src={YES} className="Images" alt="" />
            </td>
            <td className="tabel-cell3">
              <img src={NO} className="Images" alt="" />
            </td>
          </tr>
          <tr>
            <td className="table-cell"></td>
            <td className="tabel-cell2 special"></td>
            <td className="tabel-cell3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
