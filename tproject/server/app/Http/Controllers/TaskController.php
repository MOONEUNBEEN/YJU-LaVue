<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    /* 게시글 목록 */
    public function index()
    {
        return Task::all();
    }

    /* 게시글 상세보기 */
    public function show($id)
    {
        return Task::find($id);
    }

    /* 게시글 작성 */
    public function store(Request $request)
    {
        return Task::create($request->all());
    }

    /* 게시글 수정 */
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->all());

        return $task;
    }

    /* 게시글 삭제 */
    public function delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;
    }
}
