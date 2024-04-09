/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#computed_fields Manifest#computed_fields}
  */
  readonly computedFields?: string[];
  /**
  * A Kubernetes manifest describing the desired state of the resource in HCL format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#manifest Manifest#manifest}
  */
  readonly manifest: { [key: string]: any };
  /**
  * The resulting resource state, as returned by the API server after applying the desired state from `manifest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#object Manifest#object}
  */
  readonly object?: { [key: string]: any };
  /**
  * A map of attribute paths and desired patterns to be matched. After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#wait_for Manifest#wait_for}
  */
  readonly waitFor?: ManifestWaitFor;
  /**
  * field_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#field_manager Manifest#field_manager}
  */
  readonly fieldManager?: ManifestFieldManager;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#timeouts Manifest#timeouts}
  */
  readonly timeouts?: ManifestTimeouts;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#wait Manifest#wait}
  */
  readonly wait?: ManifestWait;
}
export interface ManifestWaitFor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#fields Manifest#fields}
  */
  readonly fields?: { [key: string]: string };
}

export function manifestWaitForToTerraform(struct?: ManifestWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
  }
}


export function manifestWaitForToHclTerraform(struct?: ManifestWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManifestWaitFor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWaitFor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface ManifestFieldManager {
  /**
  * Force changes against conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#force_conflicts Manifest#force_conflicts}
  */
  readonly forceConflicts?: boolean | cdktf.IResolvable;
  /**
  * The name to use for the field manager when creating and updating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#name Manifest#name}
  */
  readonly name?: string;
}

export function manifestFieldManagerToTerraform(struct?: ManifestFieldManagerOutputReference | ManifestFieldManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_conflicts: cdktf.booleanToTerraform(struct!.forceConflicts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function manifestFieldManagerToHclTerraform(struct?: ManifestFieldManagerOutputReference | ManifestFieldManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_conflicts: {
      value: cdktf.booleanToHclTerraform(struct!.forceConflicts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestFieldManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManifestFieldManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceConflicts !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceConflicts = this._forceConflicts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestFieldManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceConflicts = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceConflicts = value.forceConflicts;
      this._name = value.name;
    }
  }

  // force_conflicts - computed: false, optional: true, required: false
  private _forceConflicts?: boolean | cdktf.IResolvable; 
  public get forceConflicts() {
    return this.getBooleanAttribute('force_conflicts');
  }
  public set forceConflicts(value: boolean | cdktf.IResolvable) {
    this._forceConflicts = value;
  }
  public resetForceConflicts() {
    this._forceConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceConflictsInput() {
    return this._forceConflicts;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ManifestTimeouts {
  /**
  * Timeout for the create operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#create Manifest#create}
  */
  readonly create?: string;
  /**
  * Timeout for the delete operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#delete Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Timeout for the update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#update Manifest#update}
  */
  readonly update?: string;
}

export function manifestTimeoutsToTerraform(struct?: ManifestTimeoutsOutputReference | ManifestTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function manifestTimeoutsToHclTerraform(struct?: ManifestTimeoutsOutputReference | ManifestTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManifestTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ManifestWaitCondition {
  /**
  * The condition status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#status Manifest#status}
  */
  readonly status?: string;
  /**
  * The type of condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#type Manifest#type}
  */
  readonly type?: string;
}

export function manifestWaitConditionToTerraform(struct?: ManifestWaitCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function manifestWaitConditionToHclTerraform(struct?: ManifestWaitCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestWaitConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManifestWaitCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWaitCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ManifestWaitConditionList extends cdktf.ComplexList {
  public internalValue? : ManifestWaitCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManifestWaitConditionOutputReference {
    return new ManifestWaitConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManifestWait {
  /**
  * A map of paths to fields to wait for a specific field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#fields Manifest#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Wait for rollout to complete on resources that support `kubectl rollout status`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#rollout Manifest#rollout}
  */
  readonly rollout?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#condition Manifest#condition}
  */
  readonly condition?: ManifestWaitCondition[] | cdktf.IResolvable;
}

export function manifestWaitToTerraform(struct?: ManifestWaitOutputReference | ManifestWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    rollout: cdktf.booleanToTerraform(struct!.rollout),
    condition: cdktf.listMapper(manifestWaitConditionToTerraform, true)(struct!.condition),
  }
}


export function manifestWaitToHclTerraform(struct?: ManifestWaitOutputReference | ManifestWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rollout: {
      value: cdktf.booleanToHclTerraform(struct!.rollout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.listMapperHcl(manifestWaitConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ManifestWaitConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManifestWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._rollout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollout = this._rollout;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._rollout = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._rollout = value.rollout;
      this._condition.internalValue = value.condition;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout?: boolean | cdktf.IResolvable; 
  public get rollout() {
    return this.getBooleanAttribute('rollout');
  }
  public set rollout(value: boolean | cdktf.IResolvable) {
    this._rollout = value;
  }
  public resetRollout() {
    this._rollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ManifestWaitConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ManifestWaitCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest kubernetes_manifest}
*/
export class Manifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Manifest to import
  * @param importFromId The id of the existing Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/manifest kubernetes_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_manifest',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.28.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computedFields = config.computedFields;
    this._manifest = config.manifest;
    this._object = config.object;
    this._waitFor.internalValue = config.waitFor;
    this._fieldManager.internalValue = config.fieldManager;
    this._timeouts.internalValue = config.timeouts;
    this._wait.internalValue = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computed_fields - computed: false, optional: true, required: false
  private _computedFields?: string[]; 
  public get computedFields() {
    return this.getListAttribute('computed_fields');
  }
  public set computedFields(value: string[]) {
    this._computedFields = value;
  }
  public resetComputedFields() {
    this._computedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computedFieldsInput() {
    return this._computedFields;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest?: { [key: string]: any }; 
  public get manifest() {
    return this.getAnyMapAttribute('manifest');
  }
  public set manifest(value: { [key: string]: any }) {
    this._manifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: any }; 
  public get object() {
    return this.getAnyMapAttribute('object');
  }
  public set object(value: { [key: string]: any }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // wait_for - computed: false, optional: true, required: false
  private _waitFor = new ManifestWaitForOutputReference(this, "wait_for");
  public get waitFor() {
    return this._waitFor;
  }
  public putWaitFor(value: ManifestWaitFor) {
    this._waitFor.internalValue = value;
  }
  public resetWaitFor() {
    this._waitFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor.internalValue;
  }

  // field_manager - computed: false, optional: true, required: false
  private _fieldManager = new ManifestFieldManagerOutputReference(this, "field_manager");
  public get fieldManager() {
    return this._fieldManager;
  }
  public putFieldManager(value: ManifestFieldManager) {
    this._fieldManager.internalValue = value;
  }
  public resetFieldManager() {
    this._fieldManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldManagerInput() {
    return this._fieldManager.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManifestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManifestTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new ManifestWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: ManifestWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      computed_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._computedFields),
      manifest: cdktf.hashMapper(cdktf.anyToTerraform)(this._manifest),
      object: cdktf.hashMapper(cdktf.anyToTerraform)(this._object),
      wait_for: manifestWaitForToTerraform(this._waitFor.internalValue),
      field_manager: manifestFieldManagerToTerraform(this._fieldManager.internalValue),
      timeouts: manifestTimeoutsToTerraform(this._timeouts.internalValue),
      wait: manifestWaitToTerraform(this._wait.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      computed_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._computedFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      manifest: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._manifest),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      object: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._object),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      wait_for: {
        value: manifestWaitForToHclTerraform(this._waitFor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManifestWaitFor",
      },
      field_manager: {
        value: manifestFieldManagerToHclTerraform(this._fieldManager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManifestFieldManagerList",
      },
      timeouts: {
        value: manifestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManifestTimeoutsList",
      },
      wait: {
        value: manifestWaitToHclTerraform(this._wait.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManifestWaitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
