# `persistentVolume` Submodule <a name="`persistentVolume` Submodule" id="@cdktf/provider-kubernetes.persistentVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolume <a name="PersistentVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume kubernetes_persistent_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolume(Construct Scope, string Id, PersistentVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig">PersistentVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig">PersistentVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata"></a>

```csharp
private void PutMetadata(PersistentVolumeMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec"></a>

```csharp
private void PutSpec(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(PersistentVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolume.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput">SpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata"></a>

```csharp
public PersistentVolumeMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec"></a>

```csharp
public PersistentVolumeSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts"></a>

```csharp
public PersistentVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput"></a>

```csharp
public PersistentVolumeMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput"></a>

```csharp
public object SpecInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeConfig <a name="PersistentVolumeConfig" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PersistentVolumeMetadata Metadata,
    object Spec,
    string Id = null,
    PersistentVolumeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec">Spec</a></code> | <code>object</code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata"></a>

```csharp
public PersistentVolumeMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#metadata PersistentVolume#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec"></a>

```csharp
public object Spec { get; set; }
```

- *Type:* object

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#spec PersistentVolume#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts"></a>

```csharp
public PersistentVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#timeouts PersistentVolume#timeouts}

---

### PersistentVolumeMetadata <a name="PersistentVolumeMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name">Name</a></code> | <code>string</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#annotations PersistentVolume#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#labels PersistentVolume#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

### PersistentVolumeSpec <a name="PersistentVolumeSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpec {
    string[] AccessModes,
    System.Collections.Generic.IDictionary<string, string> Capacity,
    PersistentVolumeSpecPersistentVolumeSource PersistentVolumeSource,
    PersistentVolumeSpecClaimRef ClaimRef = null,
    string[] MountOptions = null,
    PersistentVolumeSpecNodeAffinity NodeAffinity = null,
    string PersistentVolumeReclaimPolicy = null,
    string StorageClassName = null,
    string VolumeMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes">AccessModes</a></code> | <code>string[]</code> | Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity">Capacity</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource">PersistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef">ClaimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity">NodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy">PersistentVolumeReclaimPolicy</a></code> | <code>string</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName">StorageClassName</a></code> | <code>string</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode">VolumeMode</a></code> | <code>string</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes"></a>

```csharp
public string[] AccessModes { get; set; }
```

- *Type:* string[]

Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#access_modes PersistentVolume#access_modes}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacity { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#capacity PersistentVolume#capacity}

---

##### `PersistentVolumeSource`<sup>Required</sup> <a name="PersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSource PersistentVolumeSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#persistent_volume_source PersistentVolume#persistent_volume_source}

---

##### `ClaimRef`<sup>Optional</sup> <a name="ClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef"></a>

```csharp
public PersistentVolumeSpecClaimRef ClaimRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#claim_ref PersistentVolume#claim_ref}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; set; }
```

- *Type:* string[]

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#mount_options PersistentVolume#mount_options}

---

##### `NodeAffinity`<sup>Optional</sup> <a name="NodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity"></a>

```csharp
public PersistentVolumeSpecNodeAffinity NodeAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#node_affinity PersistentVolume#node_affinity}

---

##### `PersistentVolumeReclaimPolicy`<sup>Optional</sup> <a name="PersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy"></a>

```csharp
public string PersistentVolumeReclaimPolicy { get; set; }
```

- *Type:* string

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#persistent_volume_reclaim_policy PersistentVolume#persistent_volume_reclaim_policy}

---

##### `StorageClassName`<sup>Optional</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName"></a>

```csharp
public string StorageClassName { get; set; }
```

- *Type:* string

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#storage_class_name PersistentVolume#storage_class_name}

---

##### `VolumeMode`<sup>Optional</sup> <a name="VolumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode"></a>

```csharp
public string VolumeMode { get; set; }
```

- *Type:* string

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_mode PersistentVolume#volume_mode}

---

### PersistentVolumeSpecClaimRef <a name="PersistentVolumeSpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecClaimRef {
    string Name,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name">Name</a></code> | <code>string</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecNodeAffinity <a name="PersistentVolumeSpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinity {
    PersistentVolumeSpecNodeAffinityRequired Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required">Required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | required block. |

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequired Required { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#required PersistentVolume#required}

---

### PersistentVolumeSpecNodeAffinityRequired <a name="PersistentVolumeSpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequired {
    object NodeSelectorTerm
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm">NodeSelectorTerm</a></code> | <code>object</code> | node_selector_term block. |

---

##### `NodeSelectorTerm`<sup>Required</sup> <a name="NodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```csharp
public object NodeSelectorTerm { get; set; }
```

- *Type:* object

node_selector_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#node_selector_term PersistentVolume#node_selector_term}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm {
    object MatchExpressions = null,
    object MatchFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">MatchFields</a></code> | <code>object</code> | match_fields block. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#match_expressions PersistentVolume#match_expressions}

---

##### `MatchFields`<sup>Optional</sup> <a name="MatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```csharp
public object MatchFields { get; set; }
```

- *Type:* object

match_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#match_fields PersistentVolume#match_fields}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions {
    string Key,
    string Operator,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields {
    string Key,
    string Operator,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecPersistentVolumeSource <a name="PersistentVolumeSpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSource {
    PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore AwsElasticBlockStore = null,
    PersistentVolumeSpecPersistentVolumeSourceAzureDisk AzureDisk = null,
    PersistentVolumeSpecPersistentVolumeSourceAzureFile AzureFile = null,
    PersistentVolumeSpecPersistentVolumeSourceCephFs CephFs = null,
    PersistentVolumeSpecPersistentVolumeSourceCinder Cinder = null,
    PersistentVolumeSpecPersistentVolumeSourceCsi Csi = null,
    PersistentVolumeSpecPersistentVolumeSourceFc Fc = null,
    PersistentVolumeSpecPersistentVolumeSourceFlexVolume FlexVolume = null,
    PersistentVolumeSpecPersistentVolumeSourceFlocker Flocker = null,
    PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk GcePersistentDisk = null,
    PersistentVolumeSpecPersistentVolumeSourceGlusterfs Glusterfs = null,
    PersistentVolumeSpecPersistentVolumeSourceHostPath HostPath = null,
    PersistentVolumeSpecPersistentVolumeSourceIscsi Iscsi = null,
    PersistentVolumeSpecPersistentVolumeSourceLocal Local = null,
    PersistentVolumeSpecPersistentVolumeSourceNfs Nfs = null,
    PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk PhotonPersistentDisk = null,
    PersistentVolumeSpecPersistentVolumeSourceQuobyte Quobyte = null,
    PersistentVolumeSpecPersistentVolumeSourceRbd Rbd = null,
    PersistentVolumeSpecPersistentVolumeSourceVsphereVolume VsphereVolume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore">AwsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk">AzureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile">AzureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs">CephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder">Cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi">Csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc">Fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume">FlexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker">Flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk">GcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs">Glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath">HostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi">Iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local">Local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk">PhotonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte">Quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd">Rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume">VsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `AwsElasticBlockStore`<sup>Optional</sup> <a name="AwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore AwsElasticBlockStore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}

---

##### `AzureDisk`<sup>Optional</sup> <a name="AzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk AzureDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#azure_disk PersistentVolume#azure_disk}

---

##### `AzureFile`<sup>Optional</sup> <a name="AzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureFile AzureFile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#azure_file PersistentVolume#azure_file}

---

##### `CephFs`<sup>Optional</sup> <a name="CephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFs CephFs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#ceph_fs PersistentVolume#ceph_fs}

---

##### `Cinder`<sup>Optional</sup> <a name="Cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCinder Cinder { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#cinder PersistentVolume#cinder}

---

##### `Csi`<sup>Optional</sup> <a name="Csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsi Csi { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#csi PersistentVolume#csi}

---

##### `Fc`<sup>Optional</sup> <a name="Fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFc Fc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fc PersistentVolume#fc}

---

##### `FlexVolume`<sup>Optional</sup> <a name="FlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume FlexVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#flex_volume PersistentVolume#flex_volume}

---

##### `Flocker`<sup>Optional</sup> <a name="Flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlocker Flocker { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#flocker PersistentVolume#flocker}

---

##### `GcePersistentDisk`<sup>Optional</sup> <a name="GcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk GcePersistentDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#gce_persistent_disk PersistentVolume#gce_persistent_disk}

---

##### `Glusterfs`<sup>Optional</sup> <a name="Glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs Glusterfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#glusterfs PersistentVolume#glusterfs}

---

##### `HostPath`<sup>Optional</sup> <a name="HostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceHostPath HostPath { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#host_path PersistentVolume#host_path}

---

##### `Iscsi`<sup>Optional</sup> <a name="Iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceIscsi Iscsi { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#iscsi PersistentVolume#iscsi}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceLocal Local { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#local PersistentVolume#local}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceNfs Nfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#nfs PersistentVolume#nfs}

---

##### `PhotonPersistentDisk`<sup>Optional</sup> <a name="PhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk PhotonPersistentDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#photon_persistent_disk PersistentVolume#photon_persistent_disk}

---

##### `Quobyte`<sup>Optional</sup> <a name="Quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceQuobyte Quobyte { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#quobyte PersistentVolume#quobyte}

---

##### `Rbd`<sup>Optional</sup> <a name="Rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbd Rbd { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#rbd PersistentVolume#rbd}

---

##### `VsphereVolume`<sup>Optional</sup> <a name="VsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume VsphereVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#vsphere_volume PersistentVolume#vsphere_volume}

---

### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore {
    string VolumeId,
    string FsType = null,
    double Partition = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">VolumeId</a></code> | <code>string</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">Partition</a></code> | <code>double</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```csharp
public double Partition { get; set; }
```

- *Type:* double

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAzureDisk {
    string CachingMode,
    string DataDiskUri,
    string DiskName,
    string FsType = null,
    string Kind = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode">CachingMode</a></code> | <code>string</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">DataDiskUri</a></code> | <code>string</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName">DiskName</a></code> | <code>string</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind">Kind</a></code> | <code>string</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `CachingMode`<sup>Required</sup> <a name="CachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```csharp
public string CachingMode { get; set; }
```

- *Type:* string

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#caching_mode PersistentVolume#caching_mode}

---

##### `DataDiskUri`<sup>Required</sup> <a name="DataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```csharp
public string DataDiskUri { get; set; }
```

- *Type:* string

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#data_disk_uri PersistentVolume#data_disk_uri}

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```csharp
public string DiskName { get; set; }
```

- *Type:* string

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#disk_name PersistentVolume#disk_name}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#kind PersistentVolume#kind}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAzureFile {
    string SecretName,
    string ShareName,
    object ReadOnly = null,
    string SecretNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName">SecretName</a></code> | <code>string</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName">ShareName</a></code> | <code>string</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace">SecretNamespace</a></code> | <code>string</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_name PersistentVolume#secret_name}

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Share Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#share_name PersistentVolume#share_name}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `SecretNamespace`<sup>Optional</sup> <a name="SecretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```csharp
public string SecretNamespace { get; set; }
```

- *Type:* string

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_namespace PersistentVolume#secret_namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFs <a name="PersistentVolumeSpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCephFs {
    string[] Monitors,
    string Path = null,
    object ReadOnly = null,
    string SecretFile = null,
    PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef SecretRef = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors">Monitors</a></code> | <code>string[]</code> | Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path">Path</a></code> | <code>string</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile">SecretFile</a></code> | <code>string</code> | The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user">User</a></code> | <code>string</code> | User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |

---

##### `Monitors`<sup>Required</sup> <a name="Monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors"></a>

```csharp
public string[] Monitors { get; set; }
```

- *Type:* string[]

Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#monitors PersistentVolume#monitors}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `SecretFile`<sup>Optional</sup> <a name="SecretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```csharp
public string SecretFile { get; set; }
```

- *Type:* string

The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_file PersistentVolume#secret_file}

---

##### `SecretRef`<sup>Optional</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef SecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCinder <a name="PersistentVolumeSpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCinder {
    string VolumeId,
    string FsType = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId">VolumeId</a></code> | <code>string</code> | Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceCsi <a name="PersistentVolumeSpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsi {
    string Driver,
    string VolumeHandle,
    PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef ControllerExpandSecretRef = null,
    PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef ControllerPublishSecretRef = null,
    string FsType = null,
    PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef NodePublishSecretRef = null,
    PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef NodeStageSecretRef = null,
    object ReadOnly = null,
    System.Collections.Generic.IDictionary<string, string> VolumeAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver">Driver</a></code> | <code>string</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">ControllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">ControllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">NodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">NodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes">VolumeAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Attributes of the volume to publish. |

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; set; }
```

- *Type:* string

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_handle PersistentVolume#volume_handle}

---

##### `ControllerExpandSecretRef`<sup>Optional</sup> <a name="ControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef ControllerExpandSecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}

---

##### `ControllerPublishSecretRef`<sup>Optional</sup> <a name="ControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef ControllerPublishSecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `NodePublishSecretRef`<sup>Optional</sup> <a name="NodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef NodePublishSecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}

---

##### `NodeStageSecretRef`<sup>Optional</sup> <a name="NodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef NodeStageSecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `VolumeAttributes`<sup>Optional</sup> <a name="VolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_attributes PersistentVolume#volume_attributes}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFc <a name="PersistentVolumeSpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFc {
    double Lun,
    string[] TargetWwNs,
    string FsType = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun">Lun</a></code> | <code>double</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs">TargetWwNs</a></code> | <code>string[]</code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

FC target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `TargetWwNs`<sup>Required</sup> <a name="TargetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```csharp
public string[] TargetWwNs { get; set; }
```

- *Type:* string[]

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#target_ww_ns PersistentVolume#target_ww_ns}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolume {
    string Driver,
    string FsType = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    object ReadOnly = null,
    PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef SecretRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver">Driver</a></code> | <code>string</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Extra command options if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#options PersistentVolume#options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `SecretRef`<sup>Optional</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef SecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFlocker <a name="PersistentVolumeSpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlocker {
    string DatasetName = null,
    string DatasetUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName">DatasetName</a></code> | <code>string</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid">DatasetUuid</a></code> | <code>string</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```csharp
public string DatasetName { get; set; }
```

- *Type:* string

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#dataset_name PersistentVolume#dataset_name}

---

##### `DatasetUuid`<sup>Optional</sup> <a name="DatasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```csharp
public string DatasetUuid { get; set; }
```

- *Type:* string

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#dataset_uuid PersistentVolume#dataset_uuid}

---

### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk {
    string PdName,
    string FsType = null,
    double Partition = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName">PdName</a></code> | <code>string</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition">Partition</a></code> | <code>double</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |

---

##### `PdName`<sup>Required</sup> <a name="PdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```csharp
public string PdName { get; set; }
```

- *Type:* string

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#pd_name PersistentVolume#pd_name}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```csharp
public double Partition { get; set; }
```

- *Type:* double

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceGlusterfs {
    string EndpointsName,
    string Path,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName">EndpointsName</a></code> | <code>string</code> | The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path">Path</a></code> | <code>string</code> | The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |

---

##### `EndpointsName`<sup>Required</sup> <a name="EndpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```csharp
public string EndpointsName { get; set; }
```

- *Type:* string

The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#endpoints_name PersistentVolume#endpoints_name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceHostPath <a name="PersistentVolumeSpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceHostPath {
    string Path = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path">Path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type">Type</a></code> | <code>string</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#type PersistentVolume#type}

---

### PersistentVolumeSpecPersistentVolumeSourceIscsi <a name="PersistentVolumeSpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceIscsi {
    string Iqn,
    string TargetPortal,
    string FsType = null,
    string IscsiInterface = null,
    double Lun = null,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn">Iqn</a></code> | <code>string</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal">TargetPortal</a></code> | <code>string</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface">IscsiInterface</a></code> | <code>string</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun">Lun</a></code> | <code>double</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `Iqn`<sup>Required</sup> <a name="Iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn"></a>

```csharp
public string Iqn { get; set; }
```

- *Type:* string

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#iqn PersistentVolume#iqn}

---

##### `TargetPortal`<sup>Required</sup> <a name="TargetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```csharp
public string TargetPortal { get; set; }
```

- *Type:* string

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#target_portal PersistentVolume#target_portal}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `IscsiInterface`<sup>Optional</sup> <a name="IscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```csharp
public string IscsiInterface { get; set; }
```

- *Type:* string

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#iscsi_interface PersistentVolume#iscsi_interface}

---

##### `Lun`<sup>Optional</sup> <a name="Lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

iSCSI target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceLocal <a name="PersistentVolumeSpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceLocal {
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path">Path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#path PersistentVolume#path}

---

### PersistentVolumeSpecPersistentVolumeSourceNfs <a name="PersistentVolumeSpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceNfs {
    string Path,
    string Server,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path">Path</a></code> | <code>string</code> | Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server">Server</a></code> | <code>string</code> | Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#server PersistentVolume#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk {
    string PdId,
    string FsType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">PdId</a></code> | <code>string</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `PdId`<sup>Required</sup> <a name="PdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```csharp
public string PdId { get; set; }
```

- *Type:* string

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#pd_id PersistentVolume#pd_id}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeSpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceQuobyte {
    string Registry,
    string Volume,
    string Group = null,
    object ReadOnly = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry">Registry</a></code> | <code>string</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume">Volume</a></code> | <code>string</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group">Group</a></code> | <code>string</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user">User</a></code> | <code>string</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry"></a>

```csharp
public string Registry { get; set; }
```

- *Type:* string

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#registry PersistentVolume#registry}

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume"></a>

```csharp
public string Volume { get; set; }
```

- *Type:* string

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume PersistentVolume#volume}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#group PersistentVolume#group}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceRbd <a name="PersistentVolumeSpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceRbd {
    string[] CephMonitors,
    string RbdImage,
    string FsType = null,
    string Keyring = null,
    string RadosUser = null,
    string RbdPool = null,
    object ReadOnly = null,
    PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef SecretRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors">CephMonitors</a></code> | <code>string[]</code> | A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage">RbdImage</a></code> | <code>string</code> | The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring">Keyring</a></code> | <code>string</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser">RadosUser</a></code> | <code>string</code> | The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool">RbdPool</a></code> | <code>string</code> | The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `CephMonitors`<sup>Required</sup> <a name="CephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```csharp
public string[] CephMonitors { get; set; }
```

- *Type:* string[]

A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#ceph_monitors PersistentVolume#ceph_monitors}

---

##### `RbdImage`<sup>Required</sup> <a name="RbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```csharp
public string RbdImage { get; set; }
```

- *Type:* string

The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#rbd_image PersistentVolume#rbd_image}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `Keyring`<sup>Optional</sup> <a name="Keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring"></a>

```csharp
public string Keyring { get; set; }
```

- *Type:* string

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#keyring PersistentVolume#keyring}

---

##### `RadosUser`<sup>Optional</sup> <a name="RadosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser"></a>

```csharp
public string RadosUser { get; set; }
```

- *Type:* string

The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#rados_user PersistentVolume#rados_user}

---

##### `RbdPool`<sup>Optional</sup> <a name="RbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```csharp
public string RbdPool { get; set; }
```

- *Type:* string

The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#rbd_pool PersistentVolume#rbd_pool}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `SecretRef`<sup>Optional</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef SecretRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace">Namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceVsphereVolume {
    string VolumePath,
    string FsType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath">VolumePath</a></code> | <code>string</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType">FsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```csharp
public string VolumePath { get; set; }
```

- *Type:* string

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#volume_path PersistentVolume#volume_path}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeTimeouts <a name="PersistentVolumeTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#create PersistentVolume#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/persistent_volume#create PersistentVolume#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeMetadataOutputReference <a name="PersistentVolumeMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---


### PersistentVolumeSpecClaimRefOutputReference <a name="PersistentVolumeSpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecClaimRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecClaimRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---


### PersistentVolumeSpecList <a name="PersistentVolumeSpecList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get"></a>

```csharp
private PersistentVolumeSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityOutputReference <a name="PersistentVolumeSpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired">PutRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequired` <a name="PutRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired"></a>

```csharp
private void PutRequired(PersistentVolumeSpecNodeAffinityRequired Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required">Required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput">RequiredInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequiredOutputReference Required { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequired RequiredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecNodeAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```csharp
private PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```csharp
private PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```csharp
private PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">PutMatchFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">ResetMatchFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `PutMatchFields` <a name="PutMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```csharp
private void PutMatchFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchFields` <a name="ResetMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```csharp
private void ResetMatchFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">MatchFields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">MatchFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `MatchFields`<sup>Required</sup> <a name="MatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList MatchFields { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchFieldsInput`<sup>Optional</sup> <a name="MatchFieldsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```csharp
public object MatchFieldsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecNodeAffinityRequiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">PutNodeSelectorTerm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeSelectorTerm` <a name="PutNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```csharp
private void PutNodeSelectorTerm(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">NodeSelectorTerm</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">NodeSelectorTermInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeSelectorTerm`<sup>Required</sup> <a name="NodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList NodeSelectorTerm { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `NodeSelectorTermInput`<sup>Optional</sup> <a name="NodeSelectorTermInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```csharp
public object NodeSelectorTermInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecNodeAffinityRequired InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---


### PersistentVolumeSpecOutputReference <a name="PersistentVolumeSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef">PutClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity">PutNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource">PutPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef">ResetClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity">ResetNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy">ResetPersistentVolumeReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName">ResetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode">ResetVolumeMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimRef` <a name="PutClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef"></a>

```csharp
private void PutClaimRef(PersistentVolumeSpecClaimRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `PutNodeAffinity` <a name="PutNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity"></a>

```csharp
private void PutNodeAffinity(PersistentVolumeSpecNodeAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `PutPersistentVolumeSource` <a name="PutPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource"></a>

```csharp
private void PutPersistentVolumeSource(PersistentVolumeSpecPersistentVolumeSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `ResetClaimRef` <a name="ResetClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef"></a>

```csharp
private void ResetClaimRef()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetNodeAffinity` <a name="ResetNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity"></a>

```csharp
private void ResetNodeAffinity()
```

##### `ResetPersistentVolumeReclaimPolicy` <a name="ResetPersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```csharp
private void ResetPersistentVolumeReclaimPolicy()
```

##### `ResetStorageClassName` <a name="ResetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName"></a>

```csharp
private void ResetStorageClassName()
```

##### `ResetVolumeMode` <a name="ResetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode"></a>

```csharp
private void ResetVolumeMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef">ClaimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity">NodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource">PersistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput">AccessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput">CapacityInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput">ClaimRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput">NodeAffinityInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput">PersistentVolumeReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput">PersistentVolumeSourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput">StorageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput">VolumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes">AccessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity">Capacity</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy">PersistentVolumeReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName">StorageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode">VolumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimRef`<sup>Required</sup> <a name="ClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef"></a>

```csharp
public PersistentVolumeSpecClaimRefOutputReference ClaimRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a>

---

##### `NodeAffinity`<sup>Required</sup> <a name="NodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity"></a>

```csharp
public PersistentVolumeSpecNodeAffinityOutputReference NodeAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a>

---

##### `PersistentVolumeSource`<sup>Required</sup> <a name="PersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceOutputReference PersistentVolumeSource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a>

---

##### `AccessModesInput`<sup>Optional</sup> <a name="AccessModesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput"></a>

```csharp
public string[] AccessModesInput { get; }
```

- *Type:* string[]

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacityInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClaimRefInput`<sup>Optional</sup> <a name="ClaimRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput"></a>

```csharp
public PersistentVolumeSpecClaimRef ClaimRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput"></a>

```csharp
public string[] MountOptionsInput { get; }
```

- *Type:* string[]

---

##### `NodeAffinityInput`<sup>Optional</sup> <a name="NodeAffinityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput"></a>

```csharp
public PersistentVolumeSpecNodeAffinity NodeAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `PersistentVolumeReclaimPolicyInput`<sup>Optional</sup> <a name="PersistentVolumeReclaimPolicyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```csharp
public string PersistentVolumeReclaimPolicyInput { get; }
```

- *Type:* string

---

##### `PersistentVolumeSourceInput`<sup>Optional</sup> <a name="PersistentVolumeSourceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSource PersistentVolumeSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `StorageClassNameInput`<sup>Optional</sup> <a name="StorageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput"></a>

```csharp
public string StorageClassNameInput { get; }
```

- *Type:* string

---

##### `VolumeModeInput`<sup>Optional</sup> <a name="VolumeModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput"></a>

```csharp
public string VolumeModeInput { get; }
```

- *Type:* string

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes"></a>

```csharp
public string[] AccessModes { get; }
```

- *Type:* string[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacity { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; }
```

- *Type:* string[]

---

##### `PersistentVolumeReclaimPolicy`<sup>Required</sup> <a name="PersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```csharp
public string PersistentVolumeReclaimPolicy { get; }
```

- *Type:* string

---

##### `StorageClassName`<sup>Required</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName"></a>

```csharp
public string StorageClassName { get; }
```

- *Type:* string

---

##### `VolumeMode`<sup>Required</sup> <a name="VolumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode"></a>

```csharp
public string VolumeMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">PartitionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```csharp
public double PartitionInput { get; }
```

- *Type:* double

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">CachingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">DataDiskUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">CachingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">DataDiskUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">DiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingModeInput`<sup>Optional</sup> <a name="CachingModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```csharp
public string CachingModeInput { get; }
```

- *Type:* string

---

##### `DataDiskUriInput`<sup>Optional</sup> <a name="DataDiskUriInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```csharp
public string DataDiskUriInput { get; }
```

- *Type:* string

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```csharp
public string DiskNameInput { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `CachingMode`<sup>Required</sup> <a name="CachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```csharp
public string CachingMode { get; }
```

- *Type:* string

---

##### `DataDiskUri`<sup>Required</sup> <a name="DataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```csharp
public string DataDiskUri { get; }
```

- *Type:* string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```csharp
public string DiskName { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">ResetSecretNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecretNamespace` <a name="ResetSecretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```csharp
private void ResetSecretNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">SecretNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">SecretNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SecretNamespaceInput`<sup>Optional</sup> <a name="SecretNamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```csharp
public string SecretNamespaceInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SecretNamespace`<sup>Required</sup> <a name="SecretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```csharp
public string SecretNamespace { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">ResetSecretFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">ResetSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```csharp
private void PutSecretRef(PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecretFile` <a name="ResetSecretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```csharp
private void ResetSecretFile()
```

##### `ResetSecretRef` <a name="ResetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```csharp
private void ResetSecretRef()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">MonitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">SecretFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors">Monitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">SecretFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference SecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `MonitorsInput`<sup>Optional</sup> <a name="MonitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```csharp
public string[] MonitorsInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SecretFileInput`<sup>Optional</sup> <a name="SecretFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```csharp
public string SecretFileInput { get; }
```

- *Type:* string

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef SecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Monitors`<sup>Required</sup> <a name="Monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```csharp
public string[] Monitors { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `SecretFile`<sup>Required</sup> <a name="SecretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```csharp
public string SecretFile { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCinder InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">PutControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">PutControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">PutNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">PutNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">ResetControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">ResetControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">ResetNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">ResetNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">ResetVolumeAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControllerExpandSecretRef` <a name="PutControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```csharp
private void PutControllerExpandSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `PutControllerPublishSecretRef` <a name="PutControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```csharp
private void PutControllerPublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `PutNodePublishSecretRef` <a name="PutNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```csharp
private void PutNodePublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `PutNodeStageSecretRef` <a name="PutNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```csharp
private void PutNodeStageSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `ResetControllerExpandSecretRef` <a name="ResetControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```csharp
private void ResetControllerExpandSecretRef()
```

##### `ResetControllerPublishSecretRef` <a name="ResetControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```csharp
private void ResetControllerPublishSecretRef()
```

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetNodePublishSecretRef` <a name="ResetNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```csharp
private void ResetNodePublishSecretRef()
```

##### `ResetNodeStageSecretRef` <a name="ResetNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```csharp
private void ResetNodeStageSecretRef()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetVolumeAttributes` <a name="ResetVolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```csharp
private void ResetVolumeAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">ControllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">ControllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">NodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">NodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">ControllerExpandSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">ControllerPublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">NodePublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">NodeStageSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">VolumeAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">VolumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">VolumeAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControllerExpandSecretRef`<sup>Required</sup> <a name="ControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference ControllerExpandSecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `ControllerPublishSecretRef`<sup>Required</sup> <a name="ControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference ControllerPublishSecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `NodePublishSecretRef`<sup>Required</sup> <a name="NodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference NodePublishSecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `NodeStageSecretRef`<sup>Required</sup> <a name="NodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference NodeStageSecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `ControllerExpandSecretRefInput`<sup>Optional</sup> <a name="ControllerExpandSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef ControllerExpandSecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `ControllerPublishSecretRefInput`<sup>Optional</sup> <a name="ControllerPublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef ControllerPublishSecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `NodePublishSecretRefInput`<sup>Optional</sup> <a name="NodePublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef NodePublishSecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `NodeStageSecretRefInput`<sup>Optional</sup> <a name="NodeStageSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef NodeStageSecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `VolumeAttributesInput`<sup>Optional</sup> <a name="VolumeAttributesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeHandleInput`<sup>Optional</sup> <a name="VolumeHandleInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```csharp
public string VolumeHandleInput { get; }
```

- *Type:* string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `VolumeAttributes`<sup>Required</sup> <a name="VolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">TargetWwNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">TargetWwNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `TargetWwNsInput`<sup>Optional</sup> <a name="TargetWwNsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```csharp
public string[] TargetWwNsInput { get; }
```

- *Type:* string[]

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `TargetWwNs`<sup>Required</sup> <a name="TargetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```csharp
public string[] TargetWwNs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">ResetSecretRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```csharp
private void PutSecretRef(PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecretRef` <a name="ResetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```csharp
private void ResetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference SecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef SecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">ResetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">ResetDatasetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```csharp
private void ResetDatasetName()
```

##### `ResetDatasetUuid` <a name="ResetDatasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```csharp
private void ResetDatasetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">DatasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">DatasetUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">DatasetUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```csharp
public string DatasetNameInput { get; }
```

- *Type:* string

---

##### `DatasetUuidInput`<sup>Optional</sup> <a name="DatasetUuidInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```csharp
public string DatasetUuidInput { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `DatasetUuid`<sup>Required</sup> <a name="DatasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```csharp
public string DatasetUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlocker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">PartitionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">PdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">PdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```csharp
public double PartitionInput { get; }
```

- *Type:* double

---

##### `PdNameInput`<sup>Optional</sup> <a name="PdNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```csharp
public string PdNameInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `PdName`<sup>Required</sup> <a name="PdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```csharp
public string PdName { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">EndpointsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">EndpointsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointsNameInput`<sup>Optional</sup> <a name="EndpointsNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```csharp
public string EndpointsNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `EndpointsName`<sup>Required</sup> <a name="EndpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```csharp
public string EndpointsName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceHostPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">ResetIscsiInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun">ResetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetIscsiInterface` <a name="ResetIscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```csharp
private void ResetIscsiInterface()
```

##### `ResetLun` <a name="ResetLun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```csharp
private void ResetLun()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">IqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">IscsiInterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">TargetPortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn">Iqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">IscsiInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">TargetPortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `IqnInput`<sup>Optional</sup> <a name="IqnInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```csharp
public string IqnInput { get; }
```

- *Type:* string

---

##### `IscsiInterfaceInput`<sup>Optional</sup> <a name="IscsiInterfaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```csharp
public string IscsiInterfaceInput { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `TargetPortalInput`<sup>Optional</sup> <a name="TargetPortalInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```csharp
public string TargetPortalInput { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Iqn`<sup>Required</sup> <a name="Iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```csharp
public string Iqn { get; }
```

- *Type:* string

---

##### `IscsiInterface`<sup>Required</sup> <a name="IscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```csharp
public string IscsiInterface { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `TargetPortal`<sup>Required</sup> <a name="TargetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```csharp
public string TargetPortal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceIscsi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceLocal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceNfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">PutAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk">PutAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile">PutAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs">PutCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder">PutCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi">PutCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc">PutFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume">PutFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker">PutFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">PutGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs">PutGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath">PutHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi">PutIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal">PutLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">PutPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte">PutQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd">PutRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume">PutVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">ResetAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk">ResetAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile">ResetAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs">ResetCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder">ResetCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi">ResetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc">ResetFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume">ResetFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker">ResetFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">ResetGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs">ResetGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath">ResetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi">ResetIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">ResetPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte">ResetQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd">ResetRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume">ResetVsphereVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsElasticBlockStore` <a name="PutAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```csharp
private void PutAwsElasticBlockStore(PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `PutAzureDisk` <a name="PutAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```csharp
private void PutAzureDisk(PersistentVolumeSpecPersistentVolumeSourceAzureDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `PutAzureFile` <a name="PutAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```csharp
private void PutAzureFile(PersistentVolumeSpecPersistentVolumeSourceAzureFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `PutCephFs` <a name="PutCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```csharp
private void PutCephFs(PersistentVolumeSpecPersistentVolumeSourceCephFs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `PutCinder` <a name="PutCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder"></a>

```csharp
private void PutCinder(PersistentVolumeSpecPersistentVolumeSourceCinder Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `PutCsi` <a name="PutCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi"></a>

```csharp
private void PutCsi(PersistentVolumeSpecPersistentVolumeSourceCsi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `PutFc` <a name="PutFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc"></a>

```csharp
private void PutFc(PersistentVolumeSpecPersistentVolumeSourceFc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `PutFlexVolume` <a name="PutFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```csharp
private void PutFlexVolume(PersistentVolumeSpecPersistentVolumeSourceFlexVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `PutFlocker` <a name="PutFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```csharp
private void PutFlocker(PersistentVolumeSpecPersistentVolumeSourceFlocker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `PutGcePersistentDisk` <a name="PutGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```csharp
private void PutGcePersistentDisk(PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `PutGlusterfs` <a name="PutGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```csharp
private void PutGlusterfs(PersistentVolumeSpecPersistentVolumeSourceGlusterfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `PutHostPath` <a name="PutHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```csharp
private void PutHostPath(PersistentVolumeSpecPersistentVolumeSourceHostPath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `PutIscsi` <a name="PutIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```csharp
private void PutIscsi(PersistentVolumeSpecPersistentVolumeSourceIscsi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `PutLocal` <a name="PutLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal"></a>

```csharp
private void PutLocal(PersistentVolumeSpecPersistentVolumeSourceLocal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs"></a>

```csharp
private void PutNfs(PersistentVolumeSpecPersistentVolumeSourceNfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `PutPhotonPersistentDisk` <a name="PutPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```csharp
private void PutPhotonPersistentDisk(PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `PutQuobyte` <a name="PutQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```csharp
private void PutQuobyte(PersistentVolumeSpecPersistentVolumeSourceQuobyte Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `PutRbd` <a name="PutRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd"></a>

```csharp
private void PutRbd(PersistentVolumeSpecPersistentVolumeSourceRbd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `PutVsphereVolume` <a name="PutVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```csharp
private void PutVsphereVolume(PersistentVolumeSpecPersistentVolumeSourceVsphereVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `ResetAwsElasticBlockStore` <a name="ResetAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```csharp
private void ResetAwsElasticBlockStore()
```

##### `ResetAzureDisk` <a name="ResetAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```csharp
private void ResetAzureDisk()
```

##### `ResetAzureFile` <a name="ResetAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```csharp
private void ResetAzureFile()
```

##### `ResetCephFs` <a name="ResetCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```csharp
private void ResetCephFs()
```

##### `ResetCinder` <a name="ResetCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```csharp
private void ResetCinder()
```

##### `ResetCsi` <a name="ResetCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```csharp
private void ResetCsi()
```

##### `ResetFc` <a name="ResetFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc"></a>

```csharp
private void ResetFc()
```

##### `ResetFlexVolume` <a name="ResetFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```csharp
private void ResetFlexVolume()
```

##### `ResetFlocker` <a name="ResetFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```csharp
private void ResetFlocker()
```

##### `ResetGcePersistentDisk` <a name="ResetGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```csharp
private void ResetGcePersistentDisk()
```

##### `ResetGlusterfs` <a name="ResetGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```csharp
private void ResetGlusterfs()
```

##### `ResetHostPath` <a name="ResetHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```csharp
private void ResetHostPath()
```

##### `ResetIscsi` <a name="ResetIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```csharp
private void ResetIscsi()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```csharp
private void ResetNfs()
```

##### `ResetPhotonPersistentDisk` <a name="ResetPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```csharp
private void ResetPhotonPersistentDisk()
```

##### `ResetQuobyte` <a name="ResetQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```csharp
private void ResetQuobyte()
```

##### `ResetRbd` <a name="ResetRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```csharp
private void ResetRbd()
```

##### `ResetVsphereVolume` <a name="ResetVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```csharp
private void ResetVsphereVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">AwsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk">AzureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile">AzureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs">CephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder">Cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi">Csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc">Fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume">FlexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker">Flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">GcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs">Glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath">HostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi">Iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local">Local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">PhotonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte">Quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd">Rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume">VsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">AwsElasticBlockStoreInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput">AzureDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput">AzureFileInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput">CephFsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput">CinderInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput">CsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput">FcInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">FlexVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput">FlockerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">GcePersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput">GlusterfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput">HostPathInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput">IscsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput">LocalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">PhotonPersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput">QuobyteInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput">RbdInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">VsphereVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsElasticBlockStore`<sup>Required</sup> <a name="AwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference AwsElasticBlockStore { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `AzureDisk`<sup>Required</sup> <a name="AzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference AzureDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `AzureFile`<sup>Required</sup> <a name="AzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference AzureFile { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `CephFs`<sup>Required</sup> <a name="CephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference CephFs { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `Cinder`<sup>Required</sup> <a name="Cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference Cinder { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference Csi { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `Fc`<sup>Required</sup> <a name="Fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFcOutputReference Fc { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a>

---

##### `FlexVolume`<sup>Required</sup> <a name="FlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference FlexVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `Flocker`<sup>Required</sup> <a name="Flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference Flocker { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `GcePersistentDisk`<sup>Required</sup> <a name="GcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference GcePersistentDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `Glusterfs`<sup>Required</sup> <a name="Glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference Glusterfs { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference HostPath { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `Iscsi`<sup>Required</sup> <a name="Iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference Iscsi { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference Local { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference Nfs { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `PhotonPersistentDisk`<sup>Required</sup> <a name="PhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference PhotonPersistentDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `Quobyte`<sup>Required</sup> <a name="Quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference Quobyte { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `Rbd`<sup>Required</sup> <a name="Rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference Rbd { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `VsphereVolume`<sup>Required</sup> <a name="VsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference VsphereVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `AwsElasticBlockStoreInput`<sup>Optional</sup> <a name="AwsElasticBlockStoreInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore AwsElasticBlockStoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `AzureDiskInput`<sup>Optional</sup> <a name="AzureDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk AzureDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `AzureFileInput`<sup>Optional</sup> <a name="AzureFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceAzureFile AzureFileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `CephFsInput`<sup>Optional</sup> <a name="CephFsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCephFs CephFsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `CinderInput`<sup>Optional</sup> <a name="CinderInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCinder CinderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `CsiInput`<sup>Optional</sup> <a name="CsiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceCsi CsiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `FcInput`<sup>Optional</sup> <a name="FcInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFc FcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `FlexVolumeInput`<sup>Optional</sup> <a name="FlexVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume FlexVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `FlockerInput`<sup>Optional</sup> <a name="FlockerInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceFlocker FlockerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `GcePersistentDiskInput`<sup>Optional</sup> <a name="GcePersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk GcePersistentDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `GlusterfsInput`<sup>Optional</sup> <a name="GlusterfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs GlusterfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceHostPath HostPathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `IscsiInput`<sup>Optional</sup> <a name="IscsiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceIscsi IscsiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceLocal LocalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceNfs NfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `PhotonPersistentDiskInput`<sup>Optional</sup> <a name="PhotonPersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk PhotonPersistentDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `QuobyteInput`<sup>Optional</sup> <a name="QuobyteInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceQuobyte QuobyteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `RbdInput`<sup>Optional</sup> <a name="RbdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbd RbdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `VsphereVolumeInput`<sup>Optional</sup> <a name="VsphereVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume VsphereVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---


### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">PdIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">PdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `PdIdInput`<sup>Optional</sup> <a name="PdIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```csharp
public string PdIdInput { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `PdId`<sup>Required</sup> <a name="PdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```csharp
public string PdId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">RegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">VolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry">Registry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume">Volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```csharp
public string RegistryInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```csharp
public string VolumeInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```csharp
public string Registry { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```csharp
public string Volume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceQuobyte InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring">ResetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">ResetRadosUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">ResetRbdPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">ResetSecretRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```csharp
private void PutSecretRef(PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetKeyring` <a name="ResetKeyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```csharp
private void ResetKeyring()
```

##### `ResetRadosUser` <a name="ResetRadosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```csharp
private void ResetRadosUser()
```

##### `ResetRbdPool` <a name="ResetRbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```csharp
private void ResetRbdPool()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecretRef` <a name="ResetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```csharp
private void ResetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">CephMonitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">KeyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">RadosUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">RbdImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">RbdPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">CephMonitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring">Keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser">RadosUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">RbdImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">RbdPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference SecretRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `CephMonitorsInput`<sup>Optional</sup> <a name="CephMonitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```csharp
public string[] CephMonitorsInput { get; }
```

- *Type:* string[]

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `KeyringInput`<sup>Optional</sup> <a name="KeyringInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```csharp
public string KeyringInput { get; }
```

- *Type:* string

---

##### `RadosUserInput`<sup>Optional</sup> <a name="RadosUserInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```csharp
public string RadosUserInput { get; }
```

- *Type:* string

---

##### `RbdImageInput`<sup>Optional</sup> <a name="RbdImageInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```csharp
public string RbdImageInput { get; }
```

- *Type:* string

---

##### `RbdPoolInput`<sup>Optional</sup> <a name="RbdPoolInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```csharp
public string RbdPoolInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef SecretRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `CephMonitors`<sup>Required</sup> <a name="CephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```csharp
public string[] CephMonitors { get; }
```

- *Type:* string[]

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `Keyring`<sup>Required</sup> <a name="Keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```csharp
public string Keyring { get; }
```

- *Type:* string

---

##### `RadosUser`<sup>Required</sup> <a name="RadosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```csharp
public string RadosUser { get; }
```

- *Type:* string

---

##### `RbdImage`<sup>Required</sup> <a name="RbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```csharp
public string RbdImage { get; }
```

- *Type:* string

---

##### `RbdPool`<sup>Required</sup> <a name="RbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```csharp
public string RbdPool { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">VolumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">VolumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `VolumePathInput`<sup>Optional</sup> <a name="VolumePathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```csharp
public string VolumePathInput { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```csharp
public string VolumePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeTimeoutsOutputReference <a name="PersistentVolumeTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



