import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Topbar from "../../components/Topbar/Topbar.jsx";

const Velocity = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // let employees = [];
    let meetings = [
        {name: "Dail Scrum", hours:5},
        {name: "Sprint Review/Planning/Backlog Refinement/Kick off/PO review/Agile etc", hours:6},
    ];

    // Initialize with sample data
    let employees = [
        {
            name: 'Member A', plannedDays: 1, plannedHours: 8, unplannedDays: 0, unplannedHours: 0,
            projectAllocation: 50, sprintAllocation: 85, effectiveCapacity: 43, comment: 'Lead'
        },
        {
            name: 'Member B', plannedDays: 0.5, plannedHours: 4, unplannedDays: 0, unplannedHours: 0,
            projectAllocation: 100, sprintAllocation: 100, effectiveCapacity: 100, comment: 'Fully Allocated'
        },
        {
            name: 'Member C', plannedDays: 2, plannedHours: 16, unplannedDays: 0, unplannedHours: 0,
            projectAllocation: 100, sprintAllocation: 50, effectiveCapacity: 50, comment: 'New Member'
        }
    ];


    return (
        <>
            <Sidebar isOpen={sidebarOpen}/>
            <Topbar toggleSidebar={toggleSidebar}/>

            <main className="main-content">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-4 animate">
                        <h1 className="h3 mb-0">Sprint Capacity</h1>
                        {/*<div>*/}
                        {/*    <button className="btn btn-outline-secondary me-2">*/}
                        {/*        <i className="fas fa-download me-1"></i> Export*/}
                        {/*    </button>*/}
                        {/*    <button className="btn btn-primary">*/}
                        {/*        <i className="fas fa-plus me-1"></i> New Sprint*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>

                    <div className="row g-3">
                        <div className="col-lg-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-project-diagram"></i>
                                        Employees & Leaves
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="projectFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Projects</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Behind Schedule</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="table-light">
                                            <tr>
                                                <th rowSpan="2">Resource</th>
                                            </tr>
                                            <tr className="text-center">
                                                <th colSpan="2">Planned Leaves</th>
                                                <th colSpan="2">Unplanned Leaves</th>
                                            </tr>
                                            <tr className="">
                                                <th>Name</th>
                                                <th>Days</th>
                                                <th>Hours</th>
                                                <th>Days</th>
                                                <th>Hours</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {employees.map(emp => (
                                                <tr key={emp.name}>
                                                    <td className="text-nowrap ">
                                                        {emp.name}
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedDays}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-project-diagram"></i>
                                        Meetings
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="projectFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Projects</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Behind Schedule</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="table-light">
                                            <tr className="">
                                                <th>Meeting Name</th>
                                                <th>Hours</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {meetings.map(meeting => (
                                                <tr key={meeting.name}>
                                                    <td className="text-nowrap ">
                                                        {meeting.name}
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={meeting.hours}/>
                                                    </td>

                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-project-diagram"></i>
                                        Employee Allocations
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="projectFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Projects</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Behind Schedule</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="table-light">
                                            <tr className="">
                                                <th>Name</th>
                                                <th>Project Allocation</th>
                                                <th>Sprint Allocation</th>
                                                <th>Effective Capacity</th>
                                                <th>Comment</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {employees.map(emp => (
                                                <tr key={emp.name}>
                                                    <td className="text-nowrap ">
                                                        {emp.name}
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedDays}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-project-diagram"></i>
                                        Employee Capacity Calculation
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="projectFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Projects</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Behind Schedule</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="table-light">
                                            <tr className="">
                                                <th>Name</th>
                                                <th>Project Allocation</th>
                                                <th>Sprint Allocation</th>
                                                <th>Effective Capacity</th>
                                                <th>Comment</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {employees.map(emp => (
                                                <tr key={emp.name}>
                                                    <td className="text-nowrap ">
                                                        {emp.name}
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedDays}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.plannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" type="number"
                                                               value={emp.unplannedHours}/>
                                                    </td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
        ;
};

export default Velocity;