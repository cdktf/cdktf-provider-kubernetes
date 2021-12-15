// https://www.terraform.io/docs/providers/kubernetes/r/manifest.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#computed_fields Manifest#computed_fields}
  */
  readonly computedFields?: string[];
  /**
  * A Kubernetes manifest describing the desired state of the resource in HCL format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#manifest Manifest#manifest}
  */
  readonly manifest: { [key: string]: any } | cdktf.IResolvable;
  /**
  * The resulting resource state, as returned by the API server after applying the desired state from `manifest`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#object Manifest#object}
  */
  readonly object?: { [key: string]: any } | cdktf.IResolvable;
  /**
  * A map of attribute paths and desired patterns to be matched. After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#wait_for Manifest#wait_for}
  */
  readonly waitFor?: ManifestWaitFor;
  /**
  * field_manager block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#field_manager Manifest#field_manager}
  */
  readonly fieldManager?: ManifestFieldManager;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#timeouts Manifest#timeouts}
  */
  readonly timeouts?: ManifestTimeouts;
}
export interface ManifestWaitFor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#fields Manifest#fields}
  */
  readonly fields?: { [key: string]: string } | cdktf.IResolvable;
}

export function manifestWaitForToTerraform(struct?: ManifestWaitFor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.fields),
  }
}

export interface ManifestFieldManager {
  /**
  * Force changes against conflicts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#force_conflicts Manifest#force_conflicts}
  */
  readonly forceConflicts?: boolean | cdktf.IResolvable;
  /**
  * The name to use for the field manager when creating and updating the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#name Manifest#name}
  */
  readonly name?: string;
}

export function manifestFieldManagerToTerraform(struct?: ManifestFieldManagerOutputReference | ManifestFieldManager): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_conflicts: cdktf.booleanToTerraform(struct!.forceConflicts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ManifestFieldManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getBooleanAttribute('force_conflicts') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#create Manifest#create}
  */
  readonly create?: string;
  /**
  * Timeout for the delete operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#delete Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Timeout for the update operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#update Manifest#update}
  */
  readonly update?: string;
}

export function manifestTimeoutsToTerraform(struct?: ManifestTimeoutsOutputReference | ManifestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ManifestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html kubernetes_manifest}
*/
export class Manifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_manifest";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html kubernetes_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_manifest',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computedFields = config.computedFields;
    this._manifest = config.manifest;
    this._object = config.object;
    this._waitFor = config.waitFor;
    this._fieldManager.internalValue = config.fieldManager;
    this._timeouts.internalValue = config.timeouts;
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
  private _manifest?: { [key: string]: any } | cdktf.IResolvable; 
  public get manifest() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('manifest') as any;
  }
  public set manifest(value: { [key: string]: any } | cdktf.IResolvable) {
    this._manifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: any } | cdktf.IResolvable; 
  public get object() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object') as any;
  }
  public set object(value: { [key: string]: any } | cdktf.IResolvable) {
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
  private _waitFor?: ManifestWaitFor; 
  public get waitFor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('wait_for') as any;
  }
  public set waitFor(value: ManifestWaitFor) {
    this._waitFor = value;
  }
  public resetWaitFor() {
    this._waitFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // field_manager - computed: false, optional: true, required: false
  private _fieldManager = new ManifestFieldManagerOutputReference(this as any, "field_manager", true);
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
  private _timeouts = new ManifestTimeoutsOutputReference(this as any, "timeouts", true);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      computed_fields: cdktf.listMapper(cdktf.stringToTerraform)(this._computedFields),
      manifest: cdktf.hashMapper(cdktf.anyToTerraform)(this._manifest),
      object: cdktf.hashMapper(cdktf.anyToTerraform)(this._object),
      wait_for: manifestWaitForToTerraform(this._waitFor),
      field_manager: manifestFieldManagerToTerraform(this._fieldManager.internalValue),
      timeouts: manifestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
