# `priorityClassV1` Submodule <a name="`priorityClassV1` Submodule" id="@cdktf/provider-kubernetes.priorityClassV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PriorityClassV1 <a name="PriorityClassV1" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1 kubernetes_priority_class_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PriorityClassV1(Construct Scope, string Id, PriorityClassV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config">PriorityClassV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config">PriorityClassV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetGlobalDefault">ResetGlobalDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetPreemptionPolicy">ResetPreemptionPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.putMetadata"></a>

```csharp
private void PutMetadata(PriorityClassV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlobalDefault` <a name="ResetGlobalDefault" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetGlobalDefault"></a>

```csharp
private void ResetGlobalDefault()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreemptionPolicy` <a name="ResetPreemptionPolicy" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.resetPreemptionPolicy"></a>

```csharp
private void ResetPreemptionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PriorityClassV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PriorityClassV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PriorityClassV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PriorityClassV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PriorityClassV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PriorityClassV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PriorityClassV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PriorityClassV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PriorityClassV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference">PriorityClassV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.globalDefaultInput">GlobalDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.preemptionPolicyInput">PreemptionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.globalDefault">GlobalDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.preemptionPolicy">PreemptionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.value">Value</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.metadata"></a>

```csharp
public PriorityClassV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference">PriorityClassV1MetadataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalDefaultInput`<sup>Optional</sup> <a name="GlobalDefaultInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.globalDefaultInput"></a>

```csharp
public object GlobalDefaultInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.metadataInput"></a>

```csharp
public PriorityClassV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a>

---

##### `PreemptionPolicyInput`<sup>Optional</sup> <a name="PreemptionPolicyInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.preemptionPolicyInput"></a>

```csharp
public string PreemptionPolicyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GlobalDefault`<sup>Required</sup> <a name="GlobalDefault" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.globalDefault"></a>

```csharp
public object GlobalDefault { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PreemptionPolicy`<sup>Required</sup> <a name="PreemptionPolicy" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.preemptionPolicy"></a>

```csharp
public string PreemptionPolicy { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PriorityClassV1Config <a name="PriorityClassV1Config" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PriorityClassV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PriorityClassV1Metadata Metadata,
    double Value,
    string Description = null,
    object GlobalDefault = null,
    string Id = null,
    string PreemptionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.value">Value</a></code> | <code>double</code> | The value of this priority class. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.description">Description</a></code> | <code>string</code> | An arbitrary string that usually provides guidelines on when this priority class should be used. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.globalDefault">GlobalDefault</a></code> | <code>object</code> | Specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#id PriorityClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.preemptionPolicy">PreemptionPolicy</a></code> | <code>string</code> | PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.metadata"></a>

```csharp
public PriorityClassV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#metadata PriorityClassV1#metadata}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value of this priority class.

This is the actual priority that pods receive when they have the name of this class in their pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#value PriorityClassV1#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An arbitrary string that usually provides guidelines on when this priority class should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#description PriorityClassV1#description}

---

##### `GlobalDefault`<sup>Optional</sup> <a name="GlobalDefault" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.globalDefault"></a>

```csharp
public object GlobalDefault { get; set; }
```

- *Type:* object

Specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class.

Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#global_default PriorityClassV1#global_default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#id PriorityClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreemptionPolicy`<sup>Optional</sup> <a name="PreemptionPolicy" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Config.property.preemptionPolicy"></a>

```csharp
public string PreemptionPolicy { get; set; }
```

- *Type:* string

PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#preemption_policy PriorityClassV1#preemption_policy}

---

### PriorityClassV1Metadata <a name="PriorityClassV1Metadata" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PriorityClassV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the priority class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the priority class. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the priority class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the priority class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#annotations PriorityClassV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#generate_name PriorityClassV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the priority class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#labels PriorityClassV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the priority class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/priority_class_v1#name PriorityClassV1#name}

---

## Classes <a name="Classes" id="Classes"></a>

### PriorityClassV1MetadataOutputReference <a name="PriorityClassV1MetadataOutputReference" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PriorityClassV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1MetadataOutputReference.property.internalValue"></a>

```csharp
public PriorityClassV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.priorityClassV1.PriorityClassV1Metadata">PriorityClassV1Metadata</a>

---



